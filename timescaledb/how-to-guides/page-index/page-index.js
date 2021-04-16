module.exports = [
    {
    title: "How-to Guides",
    href: "how-to-guides",
    pageComponents: ['content-list'],
    children: [
      {
        title: "Install TimescaleDB",
        href: "install-timescaledb",
        component: 'InstallationPage',
        children: [
              {
                href: "timescale-cloud",
                iconSrc: "//assets.iobeam.com/images/docs/timescale_cloud_logo.svg"
              },
              {
                title: "Self hosted (including containers)",
                href: "self-hosted",
                type: 'react-page',
                options: { pg_version: ["12", "11"] },
                component: "InstallationPage",
                showNewsletterForm: true,
                children: [
                 {
                    Title: "Docker",
                    type: 'redirect-to-child-page',
                    href: "docker",
                    iconSrc: "//assets.iobeam.com/images/docs/moby.png",
                    children: [
                      {
                        Title: "Docker",
                        type: 'non-menu-page',
                        href: "installation-docker",
                      },
                    ],
                  },
                  {
                    Title: "Ubuntu",
                    type: 'redirect-to-child-page',
                    href: "ubuntu",
                    iconSrc: "//assets.iobeam.com/images/docs/cof_orange_hex.svg",
                    children: [
                      {
                        Title: "apt",
                        type: 'non-menu-page',
                        href: "installation-apt-ubuntu",
                      },
                      {
                        Title: "Source",
                        type: 'non-menu-page',
                        href: "installation-source",
                      },
                    ],
                  },
                  {
                    Title: "Debian",
                    type: 'redirect-to-child-page',
                    href: "debian",
                    iconSrc: "//assets.iobeam.com/images/docs/Debian_logo.svg",
                    children: [
                      {
                        Title: "apt",
                        type: 'non-menu-page',
                        href: "installation-apt-debian",
                      },
                      {
                        Title: "Source",
                        type: 'non-menu-page',
                        href: "installation-source",
                      },
                    ],
                  },
                  {
                    Title: "RHEL/CentOS",
                    type: 'redirect-to-child-page',
                    href: "rhel-centos",
                    iconSrc: "//assets.iobeam.com/images/docs/Centos_Red_Hat_logo.svg",
                    children: [
                      {
                        Title: "yum/dnf",
                        type: 'non-menu-page',
                        href: "installation-yum",
                      },
                      {
                        Title: "Source",
                        type: 'non-menu-page',
                        href: "installation-source",
                      },
                    ],
                  },
                  {
                    Title: "Windows",
                    type: 'redirect-to-child-page',
                    href: "windows",
                    iconSrc: "//assets.iobeam.com/images/docs/Windows_logo_-_2012.svg",
                    children: [
                      {
                        Title: "Installer (.zip)",
                        type: 'non-menu-page',
                        href: "installation-windows",
                      },
                      {
                        Title: "Source",
                        type: 'non-menu-page',
                        href: "installation-source-windows",
                      },
                    ],
                  },
                  {
                    Title: "AMI",
                    type: 'redirect-to-child-page',
                    href: "ami",
                    iconSrc: "//assets.iobeam.com/images/docs/aws_logo.svg",
                    children: [
                      {
                        Title: "Amazon AMI (Ubuntu)",
                        type: 'non-menu-page',
                        href: "installation-ubuntu-ami",
                      },
                    ],
                  },
                  {
                    Title: "MacOS",
                    type: 'redirect-to-child-page',
                    href: "macos",
                    iconSrc: "//assets.iobeam.com/images/docs/Apple_logo_black.svg",
                    children: [
                      {
                        Title: "Homebrew",
                        type: 'non-menu-page',
                        href: "installation-homebrew",
                      },
                      {
                        Title: "Source",
                        type: 'non-menu-page',
                        href: "installation-source",
                      },
                    ],
                  }
                ],
              },
              {
                href: "post-install-setup"
              }
            ]

      },
      {
        href: "hypertables",
        children: [
          {
            title: "CREATE",
            href: "create"
          },
          {
            title: "ALTER",
            href: "alter"
          },
          {
            title: "DROP",
            href: "drop"
          },
          {
            href: "best-practices"
          }
        ]
      },
      {
        href: "distributed-hypertables",
        children: [
          {
            title: "CREATE",
            href: "create"
          },
          {
            title: "INSERT",
            href: "insert"
          },
          {
            title: "SELECT",
            href: "select"
          },
          {
            href: "manage-data-nodes"
          },
          {
            href: "enable-native-replication"
          },
          {
            title: "ALTER",
            href: "alter"
          },
          {
            title: "DROP",
            href: "drop"
          },
          {
            href: "best-practices"
          }
        ]
      },
      {
        href: "write-data",
        children: [
          {
            title: "INSERT",
            href: "insert"
          },
          {
            title: "UPDATE",
            href: "update"
          },
          {
            title: "UPSERT",
            href: "upsert"
          },
          {
            title: "DELETE",
            href: "delete"
          }
        ]
      },
      {
        href: "query-data",
        children: [
          {
            title: "SELECT",
            href: "select"
          },
          {
            href: "advanced-analytic-queries"
          }
        ]
      },
      {
        title: "Multi-node Setup",
        href: "multi-node-setup",
        children: [
          {
            href: "required-configuration"
          },
          {
            href: "setup-trust-authentication"
          },
          {
            href: "setup-password-authentication"
          },
          {
            href: "setup-certificate-authentication"
          },
          {
            href: "maintenance-tasks"
          }
        ]
      },
      {
        href: "continuous-aggregates",
        children: [
          {
            href: "create-a-continuous-aggregate"
          },
          {
            href: "adding-automatic-refresh-policies"
          },
          {
            href: "query-a-continuous-aggregate"
          },
          {
            href: "manually-refresh-specific-ranges"
          },
          {
            href: "best-practices"
          },
          {
            title:"Using integer-based time",
            href: "integer-based-time"
          },
          {
            href: "drop-raw-data"
          }
        ]
      },
      {
        href: "compression",
        children: [
          {
            href: "compression-basics"
          },
          {
            href: "manually-compress-chunks"
          },
          {
            href: "decompress-chunks"
          },
          {
            href: "backfill-historical-data"
          },
          {
            href: "modify-a-schema"
          }
        ]
      },
      {
        href: "user-defined-actions",
        children: [
          {
            href: "create-and-register"
          },
          {
            href: "test-and-debug"
          },
          {
            title: "Altering and Deleting",
            href: "alter-and-delete"
          },
          {
            href: "example-generic-retention"
          },
          {
            href: "example-tiered-storage"
          },
          {
            href: "example-downsample-and-compress"
          }
        ]
      },
      {
        href: "data-retention",
        children: [
          {
            href: "create-a-retention-policy"
          },
          {
            href: "manually-drop-chunks"
          },
          {
            href: "data-retention-with-continuous-aggregates"
          }
        ]
      },
      {
        title: "Replication and HA",
        href: "replication-and-ha",
        children: [
          {
            href: "replication"
          }
        ]
      },
      {
        href: "backup-and-restore",
        children: [
          {
            title: "Using pg_dump/pg_restore",
            href: "pg-dump-and-restore"
          },
          {
            title: "Docker & WAL-E",
            href: "docker-and-wale"
          }
        ]
      },
      {
        href: "schema-management",
        children: [
          {
            title: "ALTER hypertables",
            href: "alter"
          },
          {
            href: "indexing"
          },
          {
            href: "triggers"
          },
          {
            href: "constraints"
          },
          {
            title: "JSON",
            href: "json"
          },
          {
            href: "tablespaces"
          }
        ]
      },
      {
        title: "Migrate Existing Data",
        href: "migrate-data",
        children: [
          {
            title: "Migrate InfluxDB data",
            href: "migrate-influxdb"
          }
        ]
      },
      {
        title: "Update TimescaleDB",
        href: "update-timescaledb",
        children: [
          {
            title: "Update TimescaleDB from 1.x to 2.x",
            href: "update-timescaledb-2"
          },
          {
            href: "updating-docker"
          },
          {
            title: "Upgrade PostgreSQL",
            href: "upgrade-postgresql"
          }
        ]
      },
      {
        title: "Ingest data from other sources",
        href: "ingest-data"
      }
    ]
  }
]