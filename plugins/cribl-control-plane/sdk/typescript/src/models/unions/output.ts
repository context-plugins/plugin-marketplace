import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { outputAlibabaCloudS3Schema, type OutputAlibabaCloudS3 } from "../output-alibaba-cloud-s3.js";
import { outputAlphasocS3Schema, type OutputAlphasocS3 } from "../output-alphasoc-s3.js";
import {
  outputAmazonManagedPrometheusSchema,
  type OutputAmazonManagedPrometheus,
} from "../output-amazon-managed-prometheus.js";
import { outputAzureBlobSchema, type OutputAzureBlob } from "../output-azure-blob.js";
import {
  outputAzureDataExplorerSchema,
  type OutputAzureDataExplorer,
} from "../output-azure-data-explorer.js";
import { outputAzureEventhubSchema, type OutputAzureEventhub } from "../output-azure-eventhub.js";
import { outputAzureLogsSchema, type OutputAzureLogs } from "../output-azure-logs.js";
import { outputChronicleSchema, type OutputChronicle } from "../output-chronicle.js";
import { outputClickHouseSchema, type OutputClickHouse } from "../output-click-house.js";
import { outputCloudflareR2Schema, type OutputCloudflareR2 } from "../output-cloudflare-r2.js";
import { outputCloudianS3Schema, type OutputCloudianS3 } from "../output-cloudian-s3.js";
import { outputCloudwatchSchema, type OutputCloudwatch } from "../output-cloudwatch.js";
import { outputConfluentCloudSchema, type OutputConfluentCloud } from "../output-confluent-cloud.js";
import { outputCriblHttpSchema, type OutputCriblHttp } from "../output-cribl-http.js";
import { outputCriblLakeSchema, type OutputCriblLake } from "../output-cribl-lake.js";
import {
  outputCriblSearchEngineSchema,
  type OutputCriblSearchEngine,
} from "../output-cribl-search-engine.js";
import { outputCriblTcpSchema, type OutputCriblTcp } from "../output-cribl-tcp.js";
import {
  outputCrowdstrikeNextGenSiemSchema,
  type OutputCrowdstrikeNextGenSiem,
} from "../output-crowdstrike-next-gen-siem.js";
import {
  outputCustomerMetricsStorageSchema,
  type OutputCustomerMetricsStorage,
} from "../output-customer-metrics-storage.js";
import { outputDatabricksZerobusSchema, type OutputDatabricksZerobus } from "../output-databricks-zerobus.js";
import { outputDatabricksSchema, type OutputDatabricks } from "../output-databricks.js";
import { outputDatadogSchema, type OutputDatadog } from "../output-datadog.js";
import { outputDatasetSchema, type OutputDataset } from "../output-dataset.js";
import { outputDefaultSchema, type OutputDefault } from "../output-default.js";
import { outputDellS3Schema, type OutputDellS3 } from "../output-dell-s3.js";
import { outputDevnullSchema, type OutputDevnull } from "../output-devnull.js";
import { outputDiskSpoolSchema, type OutputDiskSpool } from "../output-disk-spool.js";
import { outputDlS3Schema, type OutputDlS3 } from "../output-dl-s3.js";
import { outputDynatraceHttpSchema, type OutputDynatraceHttp } from "../output-dynatrace-http.js";
import { outputDynatraceOtlpSchema, type OutputDynatraceOtlp } from "../output-dynatrace-otlp.js";
import { outputElasticCloudSchema, type OutputElasticCloud } from "../output-elastic-cloud.js";
import { outputElasticSchema, type OutputElastic } from "../output-elastic.js";
import { outputExabeamSchema, type OutputExabeam } from "../output-exabeam.js";
import { outputFilesystemSchema, type OutputFilesystem } from "../output-filesystem.js";
import { outputGoogleBigquerySchema, type OutputGoogleBigquery } from "../output-google-bigquery.js";
import { outputGoogleChronicleSchema, type OutputGoogleChronicle } from "../output-google-chronicle.js";
import {
  outputGoogleCloudLoggingSchema,
  type OutputGoogleCloudLogging,
} from "../output-google-cloud-logging.js";
import {
  outputGoogleCloudObservabilitySchema,
  type OutputGoogleCloudObservability,
} from "../output-google-cloud-observability.js";
import {
  outputGoogleCloudStorageSchema,
  type OutputGoogleCloudStorage,
} from "../output-google-cloud-storage.js";
import { outputGooglePubsubSchema, type OutputGooglePubsub } from "../output-google-pubsub.js";
import { outputGrafanaCloudSchema, type OutputGrafanaCloud } from "../output-grafana-cloud.js";
import { outputGraphiteSchema, type OutputGraphite } from "../output-graphite.js";
import { outputHoneycombSchema, type OutputHoneycomb } from "../output-honeycomb.js";
import { outputHumioHecSchema, type OutputHumioHec } from "../output-humio-hec.js";
import { outputIbmCloudS3Schema, type OutputIbmCloudS3 } from "../output-ibm-cloud-s3.js";
import { outputInfluxdbSchema, type OutputInfluxdb } from "../output-influxdb.js";
import { outputKafkaSchema, type OutputKafka } from "../output-kafka.js";
import { outputKinesisSchema, type OutputKinesis } from "../output-kinesis.js";
import {
  outputLocalSearchStorageSchema,
  type OutputLocalSearchStorage,
} from "../output-local-search-storage.js";
import { outputLokiSchema, type OutputLoki } from "../output-loki.js";
import { outputMicrosoftFabricSchema, type OutputMicrosoftFabric } from "../output-microsoft-fabric.js";
import { outputMinioSchema, type OutputMinio } from "../output-minio.js";
import { outputMskSchema, type OutputMsk } from "../output-msk.js";
import { outputNetflowSchema, type OutputNetflow } from "../output-netflow.js";
import { outputNewrelicEventsSchema, type OutputNewrelicEvents } from "../output-newrelic-events.js";
import { outputNewrelicSchema, type OutputNewrelic } from "../output-newrelic.js";
import { outputNutanixObjectsSchema, type OutputNutanixObjects } from "../output-nutanix-objects.js";
import { outputOpenTelemetrySchema, type OutputOpenTelemetry } from "../output-open-telemetry.js";
import { outputPrometheusSchema, type OutputPrometheus } from "../output-prometheus.js";
import { outputRingSchema, type OutputRing } from "../output-ring.js";
import { outputRouterSchema, type OutputRouter } from "../output-router.js";
import { outputS3Schema, type OutputS3 } from "../output-s3.js";
import { outputScalityS3Schema, type OutputScalityS3 } from "../output-scality-s3.js";
import { outputSecurityLakeSchema, type OutputSecurityLake } from "../output-security-lake.js";
import {
  outputSentinelOneAiSiemSchema,
  type OutputSentinelOneAiSiem,
} from "../output-sentinel-one-ai-siem.js";
import { outputSentinelSchema, type OutputSentinel } from "../output-sentinel.js";
import { outputServiceNowSchema, type OutputServiceNow } from "../output-service-now.js";
import { outputSignalfxSchema, type OutputSignalfx } from "../output-signalfx.js";
import { outputSnmpSchema, type OutputSnmp } from "../output-snmp.js";
import {
  outputSnowflakeStreamingSchema,
  type OutputSnowflakeStreaming,
} from "../output-snowflake-streaming.js";
import { outputSnsSchema, type OutputSns } from "../output-sns.js";
import { outputSplunkHecSchema, type OutputSplunkHec } from "../output-splunk-hec.js";
import { outputSplunkLbSchema, type OutputSplunkLb } from "../output-splunk-lb.js";
import { outputSplunkSchema, type OutputSplunk } from "../output-splunk.js";
import { outputSqsSchema, type OutputSqs } from "../output-sqs.js";
import { outputStatsdExtSchema, type OutputStatsdExt } from "../output-statsd-ext.js";
import { outputStatsdSchema, type OutputStatsd } from "../output-statsd.js";
import { outputStorjS3Schema, type OutputStorjS3 } from "../output-storj-s3.js";
import { outputSumoLogicSchema, type OutputSumoLogic } from "../output-sumo-logic.js";
import { outputSyslogSchema, type OutputSyslog } from "../output-syslog.js";
import { outputTcpjsonSchema, type OutputTcpjson } from "../output-tcpjson.js";
import { outputTraversalOtlpSchema, type OutputTraversalOtlp } from "../output-traversal-otlp.js";
import { outputWavefrontSchema, type OutputWavefront } from "../output-wavefront.js";
import { outputWebhookSchema, type OutputWebhook } from "../output-webhook.js";
import { outputWizHecSchema, type OutputWizHec } from "../output-wiz-hec.js";
import { outputXsiamSchema, type OutputXsiam } from "../output-xsiam.js";

export type Output =
  | (OutputDefault & { type: "default" })
  | (OutputWebhook & { type: "webhook" })
  | (OutputSentinel & { type: "sentinel" })
  | (OutputDevnull & { type: "devnull" })
  | (OutputSyslog & { type: "syslog" })
  | (OutputSplunk & { type: "splunk" })
  | (OutputSplunkLb & { type: "splunk_lb" })
  | (OutputSplunkHec & { type: "splunk_hec" })
  | (OutputWizHec & { type: "wiz_hec" })
  | (OutputTcpjson & { type: "tcpjson" })
  | (OutputWavefront & { type: "wavefront" })
  | (OutputSignalfx & { type: "signalfx" })
  | (OutputFilesystem & { type: "filesystem" })
  | (OutputS3 & { type: "s3" })
  | (OutputAzureBlob & { type: "azure_blob" })
  | (OutputAzureDataExplorer & { type: "azure_data_explorer" })
  | (OutputAzureLogs & { type: "azure_logs" })
  | (OutputKinesis & { type: "kinesis" })
  | (OutputHoneycomb & { type: "honeycomb" })
  | (OutputAzureEventhub & { type: "azure_eventhub" })
  | (OutputGoogleBigquery & { type: "google_bigquery" })
  | (OutputGoogleChronicle & { type: "google_chronicle" })
  | (OutputGoogleCloudStorage & { type: "google_cloud_storage" })
  | (OutputGoogleCloudLogging & { type: "google_cloud_logging" })
  | (OutputGoogleCloudObservability & { type: "google_cloud_observability" })
  | (OutputGooglePubsub & { type: "google_pubsub" })
  | (OutputExabeam & { type: "exabeam" })
  | (OutputKafka & { type: "kafka" })
  | (OutputConfluentCloud & { type: "confluent_cloud" })
  | (OutputMsk & { type: "msk" })
  | (OutputElastic & { type: "elastic" })
  | (OutputElasticCloud & { type: "elastic_cloud" })
  | (OutputNewrelic & { type: "newrelic" })
  | (OutputNewrelicEvents & { type: "newrelic_events" })
  | (OutputInfluxdb & { type: "influxdb" })
  | (OutputCloudwatch & { type: "cloudwatch" })
  | (OutputMinio & { type: "minio" })
  | (OutputStatsd & { type: "statsd" })
  | (OutputStatsdExt & { type: "statsd_ext" })
  | (OutputGraphite & { type: "graphite" })
  | (OutputRouter & { type: "router" })
  | (OutputSns & { type: "sns" })
  | (OutputSqs & { type: "sqs" })
  | (OutputSnmp & { type: "snmp" })
  | (OutputSumoLogic & { type: "sumo_logic" })
  | (OutputDatadog & { type: "datadog" })
  | (OutputGrafanaCloud & { type: "grafana_cloud" })
  | (OutputLoki & { type: "loki" })
  | (OutputAmazonManagedPrometheus & { type: "amazon_managed_prometheus" })
  | (OutputPrometheus & { type: "prometheus" })
  | (OutputRing & { type: "ring" })
  | (OutputOpenTelemetry & { type: "open_telemetry" })
  | (OutputServiceNow & { type: "service_now" })
  | (OutputDataset & { type: "dataset" })
  | (OutputCriblTcp & { type: "cribl_tcp" })
  | (OutputCriblHttp & { type: "cribl_http" })
  | (OutputCriblSearchEngine & { type: "cribl_search_engine" })
  | (OutputHumioHec & { type: "humio_hec" })
  | (OutputCrowdstrikeNextGenSiem & { type: "crowdstrike_next_gen_siem" })
  | (OutputDlS3 & { type: "dl_s3" })
  | (OutputSecurityLake & { type: "security_lake" })
  | (OutputCriblLake & { type: "cribl_lake" })
  | (OutputDiskSpool & { type: "disk_spool" })
  | (OutputClickHouse & { type: "click_house" })
  | (OutputCustomerMetricsStorage & { type: "customer_metrics_storage" })
  | (OutputLocalSearchStorage & { type: "local_search_storage" })
  | (OutputXsiam & { type: "xsiam" })
  | (OutputNetflow & { type: "netflow" })
  | (OutputDynatraceHttp & { type: "dynatrace_http" })
  | (OutputDynatraceOtlp & { type: "dynatrace_otlp" })
  | (OutputTraversalOtlp & { type: "traversal_otlp" })
  | (OutputSentinelOneAiSiem & { type: "sentinel_one_ai_siem" })
  | (OutputChronicle & { type: "chronicle" })
  | (OutputDatabricks & { type: "databricks" })
  | (OutputSnowflakeStreaming & { type: "snowflake_streaming" })
  | (OutputMicrosoftFabric & { type: "microsoft_fabric" })
  | (OutputCloudflareR2 & { type: "cloudflare_r2" })
  | (OutputNutanixObjects & { type: "nutanix_objects" })
  | (OutputStorjS3 & { type: "storj_s3" })
  | (OutputAlphasocS3 & { type: "alphasoc_s3" })
  | (OutputDellS3 & { type: "dell_s3" })
  | (OutputCloudianS3 & { type: "cloudian_s3" })
  | (OutputScalityS3 & { type: "scality_s3" })
  | (OutputAlibabaCloudS3 & { type: "alibaba_cloud_s3" })
  | (OutputIbmCloudS3 & { type: "ibm_cloud_s3" })
  | (OutputDatabricksZerobus & { type: "databricks_zerobus" });

export const outputSchema: Schema<Output> = s.discriminatedUnion<Output>("type", {
  default: outputDefaultSchema,
  webhook: outputWebhookSchema,
  sentinel: outputSentinelSchema,
  devnull: outputDevnullSchema,
  syslog: outputSyslogSchema,
  splunk: outputSplunkSchema,
  splunk_lb: outputSplunkLbSchema,
  splunk_hec: outputSplunkHecSchema,
  wiz_hec: outputWizHecSchema,
  tcpjson: outputTcpjsonSchema,
  wavefront: outputWavefrontSchema,
  signalfx: outputSignalfxSchema,
  filesystem: outputFilesystemSchema,
  s3: outputS3Schema,
  azure_blob: outputAzureBlobSchema,
  azure_data_explorer: outputAzureDataExplorerSchema,
  azure_logs: outputAzureLogsSchema,
  kinesis: outputKinesisSchema,
  honeycomb: outputHoneycombSchema,
  azure_eventhub: outputAzureEventhubSchema,
  google_bigquery: outputGoogleBigquerySchema,
  google_chronicle: outputGoogleChronicleSchema,
  google_cloud_storage: outputGoogleCloudStorageSchema,
  google_cloud_logging: outputGoogleCloudLoggingSchema,
  google_cloud_observability: outputGoogleCloudObservabilitySchema,
  google_pubsub: outputGooglePubsubSchema,
  exabeam: outputExabeamSchema,
  kafka: outputKafkaSchema,
  confluent_cloud: outputConfluentCloudSchema,
  msk: outputMskSchema,
  elastic: outputElasticSchema,
  elastic_cloud: outputElasticCloudSchema,
  newrelic: outputNewrelicSchema,
  newrelic_events: outputNewrelicEventsSchema,
  influxdb: outputInfluxdbSchema,
  cloudwatch: outputCloudwatchSchema,
  minio: outputMinioSchema,
  statsd: outputStatsdSchema,
  statsd_ext: outputStatsdExtSchema,
  graphite: outputGraphiteSchema,
  router: outputRouterSchema,
  sns: outputSnsSchema,
  sqs: outputSqsSchema,
  snmp: outputSnmpSchema,
  sumo_logic: outputSumoLogicSchema,
  datadog: outputDatadogSchema,
  grafana_cloud: outputGrafanaCloudSchema,
  loki: outputLokiSchema,
  amazon_managed_prometheus: outputAmazonManagedPrometheusSchema,
  prometheus: outputPrometheusSchema,
  ring: outputRingSchema,
  open_telemetry: outputOpenTelemetrySchema,
  service_now: outputServiceNowSchema,
  dataset: outputDatasetSchema,
  cribl_tcp: outputCriblTcpSchema,
  cribl_http: outputCriblHttpSchema,
  cribl_search_engine: outputCriblSearchEngineSchema,
  humio_hec: outputHumioHecSchema,
  crowdstrike_next_gen_siem: outputCrowdstrikeNextGenSiemSchema,
  dl_s3: outputDlS3Schema,
  security_lake: outputSecurityLakeSchema,
  cribl_lake: outputCriblLakeSchema,
  disk_spool: outputDiskSpoolSchema,
  click_house: outputClickHouseSchema,
  customer_metrics_storage: outputCustomerMetricsStorageSchema,
  local_search_storage: outputLocalSearchStorageSchema,
  xsiam: outputXsiamSchema,
  netflow: outputNetflowSchema,
  dynatrace_http: outputDynatraceHttpSchema,
  dynatrace_otlp: outputDynatraceOtlpSchema,
  traversal_otlp: outputTraversalOtlpSchema,
  sentinel_one_ai_siem: outputSentinelOneAiSiemSchema,
  chronicle: outputChronicleSchema,
  databricks: outputDatabricksSchema,
  snowflake_streaming: outputSnowflakeStreamingSchema,
  microsoft_fabric: outputMicrosoftFabricSchema,
  cloudflare_r2: outputCloudflareR2Schema,
  nutanix_objects: outputNutanixObjectsSchema,
  storj_s3: outputStorjS3Schema,
  alphasoc_s3: outputAlphasocS3Schema,
  dell_s3: outputDellS3Schema,
  cloudian_s3: outputCloudianS3Schema,
  scality_s3: outputScalityS3Schema,
  alibaba_cloud_s3: outputAlibabaCloudS3Schema,
  ibm_cloud_s3: outputIbmCloudS3Schema,
  databricks_zerobus: outputDatabricksZerobusSchema,
});
