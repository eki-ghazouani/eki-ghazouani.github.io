
radar_visualization({
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Zalando Tech Radar — 2021.06",
  quadrants: [
    { name: "Languages" },
    { name: "Infrastructure" },
    { name: "Datastores" },
    { name: "Data Management" },
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "COucou", color: "#efafa9" },
    { name: "HOLD", color: "#efafa9" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  //ENTRIES
  entries: [
      {
        "quadrant": 2,
        "ring": 0,
        "label": "AWS DynamoDB",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "Exasol",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "Redis",
        "link": "https://engineering.zalando.com/tags/redis.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "Aerospike",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 1,
        "label": "Amazon Redshift",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "Hazelcast",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "Oracle DB",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "ZooKeeper",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 2,
        "label": "Google Bigtable",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 2,
        "label": "RocksDB",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "Cassandra",
        "link": "https://engineering.zalando.com/tags/cassandra.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 1,
        "label": "HDFS",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "Solr",
        "active": true,
        "moved": -1
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "AWS S3",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "etcd",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "Memcached",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "PostgreSQL",
        "link": "https://engineering.zalando.com/tags/postgresql.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "HBase",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "MongoDB",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 0,
        "label": "Elasticsearch",
        "link": "https://engineering.zalando.com/tags/elasticsearch.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "CouchBase",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "Consul",
        "active": true,
        "moved": -1
      },
      {
        "quadrant": 2,
        "ring": 3,
        "label": "MySQL",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 0,
        "label": "Databricks",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 3,
        "ring": 3,
        "label": "YARN",
        "active": true,
        "moved": -1
      },
      {
        "quadrant": 3,
        "ring": 1,
        "label": "Presto",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 0,
        "label": "Airflow",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 3,
        "ring": 1,
        "label": "Flink",
        "link": "https://engineering.zalando.com/tags/apache-flink.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 3,
        "label": "AWS Data Pipeline",
        "active": true,
        "moved": -1
      },
      {
        "quadrant": 3,
        "ring": 1,
        "label": "Google BigQuery",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 2,
        "label": "AWS Glue",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 3,
        "ring": 0,
        "label": "AWS EMR",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 3,
        "label": "Hadoop",
        "active": true,
        "moved": -1
      },
      {
        "quadrant": 3,
        "ring": 2,
        "label": "AWS Athena",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 3,
        "ring": 0,
        "label": "Spark",
        "link": "https://engineering.zalando.com/tags/apache-spark.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 1,
        "ring": 0,
        "label": "AWS CloudFront",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 1,
        "ring": 0,
        "label": "Docker",
        "link": "https://engineering.zalando.com/tags/docker.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 1,
        "ring": 0,
        "label": "AWS CloudFormation",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 1,
        "ring": 3,
        "label": "STUPS",
        "link": "https://engineering.zalando.com/tags/stups.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 1,
        "ring": 0,
        "label": "ZMON",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 1,
        "ring": 2,
        "label": "Slurm",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 1,
        "ring": 0,
        "label": "Skipper",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 1,
        "ring": 0,
        "label": "Amazon SageMaker",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 1,
        "ring": 0,
        "label": "Kubernetes",
        "link": "https://engineering.zalando.com/tags/kubernetes.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 1,
        "ring": 0,
        "label": "OpenTracing",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 1,
        "ring": 0,
        "label": "Nginx",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 1,
        "ring": 1,
        "label": "AWS Lambda",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 0,
        "ring": 0,
        "label": "GraphQL",
        "link": "https://engineering.zalando.com/tags/graphql.html",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 0,
        "ring": 0,
        "label": "OpenAPI (Swagger)",
        "link": "https://engineering.zalando.com/tags/openapi.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 0,
        "ring": 0,
        "label": "Java",
        "link": "https://engineering.zalando.com/tags/java.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 0,
        "ring": 0,
        "label": "TypeScript",
        "link": "https://engineering.zalando.com/tags/typescript.html",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 0,
        "ring": 3,
        "label": "Haskell",
        "link": "https://engineering.zalando.com/tags/haskell.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 0,
        "ring": 0,
        "label": "Kotlin",
        "link": "https://engineering.zalando.com/tags/kotlin.html",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 0,
        "ring": 3,
        "label": "Rust",
        "link": "https://engineering.zalando.com/tags/rust.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 0,
        "ring": 3,
        "label": "Clojure",
        "link": "https://engineering.zalando.com/tags/clojure.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 0,
        "ring": 0,
        "label": "JavaScript",
        "link": "https://engineering.zalando.com/tags/javascript.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 0,
        "ring": 0,
        "label": "Go",
        "link": "https://engineering.zalando.com/tags/golang.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 0,
        "ring": 0,
        "label": "Scala",
        "link": "https://engineering.zalando.com/tags/scala.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 0,
        "ring": 2,
        "label": "R",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 0,
        "ring": 0,
        "label": "Swift",
        "link": "https://engineering.zalando.com/tags/swift.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 0,
        "ring": 0,
        "label": "Python",
        "link": "https://engineering.zalando.com/tags/python.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 0,
        "label": "Kafka",
        "link": "https://engineering.zalando.com/tags/kafka.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 0,
        "label": "AWS SNS",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 3,
        "label": "ActiveMQ",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 1,
        "label": "AWS Kinesis",
        "active": true,
        "moved": 1
      },
      {
        "quadrant": 3,
        "ring": 0,
        "label": "Nakadi",
        "link": "https://nakadi.io",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 0,
        "label": "AWS SQS",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 1,
        "label": "RabbitMQ",
        "link": "https://engineering.zalando.com/tags/rabbitmq.html",
        "active": true,
        "moved": 0
      },
      {
        "quadrant": 3,
        "ring": 3,
        "label": "HornetQ",
        "active": true,
        "moved": 0
      }
  ]
  //ENTRIES
});