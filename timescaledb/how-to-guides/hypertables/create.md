# Create a Hypertable

Creating a hypertable is a two-step process.
<!-- add steps format?-->
1. Create a standard table ([PostgreSQL docs][postgres-createtable]).
```sql
CREATE TABLE conditions (
    time        TIMESTAMPTZ       NOT NULL,
    location    TEXT              NOT NULL,
    temperature DOUBLE PRECISION  NULL
);
```

1. Then, execute the TimescaleDB
[`create_hypertable`][create_hypertable] command on this newly created
table, or use
[`create_distributed_hypertable`][create_distributed_hypertable] to
create a [distributed hypertable][using-distributed-hypertables] that
scales out across multiple data nodes.

```sql
SELECT create_hypertable('conditions', 'time');
```

<highlight type="tip">
If you need to *migrate* data from an existing table to a hypertable, make
sure to set the `migrate_data` argument to `true` when calling the function.
If you would like finer control over index formation and other aspects
of your hypertable, [follow these migration instructions instead][migrate-from-postgresql].
</highlight>

<highlight type="warning">
The use of the `migrate_data` argument to convert a non-empty table can
lock the table for a significant amount of time, depending on how much data is
in the table.
</highlight>

<highlight type="tip">
The 'time' column used in the `create_hypertable` function supports
timestamp, date, or integer types, so you can use a parameter that is not
explicitly time-based, as long as it can increment.  For example, a
monotonically increasing id would work.
</highlight>


[create_hypertable]: /api-reference/:currentVersion:/hypertables-and-chunks/create_hypertable
[create_distributed_hypertable]: /api-reference/:currentVersion:/distributed-hypertables/create_distributed_hypertable
[using-distributed-hypertables]: /how-to-guides/distributed-hypertables
[migrate-from-postgresql]: /how-to-guides/migrate-existing-data
