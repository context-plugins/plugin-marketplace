import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { inputAkamaiHecSchema, type InputAkamaiHec } from "../input-akamai-hec.js";
import {
  inputAnthropicComplianceSchema,
  type InputAnthropicCompliance,
} from "../input-anthropic-compliance.js";
import {
  inputAnthropicEnterpriseAnalyticsSchema,
  type InputAnthropicEnterpriseAnalytics,
} from "../input-anthropic-enterprise-analytics.js";
import { inputAppleUnifiedLogsSchema, type InputAppleUnifiedLogs } from "../input-apple-unified-logs.js";
import { inputAppscopeSchema, type InputAppscope } from "../input-appscope.js";
import { inputAquaSecurityHecSchema, type InputAquaSecurityHec } from "../input-aqua-security-hec.js";
import { inputAzureBlobSchema, type InputAzureBlob } from "../input-azure-blob.js";
import { inputAzureVnetFlowLogSchema, type InputAzureVnetFlowLog } from "../input-azure-vnet-flow-log.js";
import { inputBedrockS3Schema, type InputBedrockS3 } from "../input-bedrock-s3.js";
import { inputBeyondtrustHecSchema, type InputBeyondtrustHec } from "../input-beyondtrust-hec.js";
import { inputCloudflareHecSchema, type InputCloudflareHec } from "../input-cloudflare-hec.js";
import { inputCollectionSchema, type InputCollection } from "../input-collection.js";
import { inputConfluentCloudSchema, type InputConfluentCloud } from "../input-confluent-cloud.js";
import { inputCriblHttpSchema, type InputCriblHttp } from "../input-cribl-http.js";
import { inputCriblLakeHttpSchema, type InputCriblLakeHttp } from "../input-cribl-lake-http.js";
import { inputCriblTcpSchema, type InputCriblTcp } from "../input-cribl-tcp.js";
import { inputCriblSchema, type InputCribl } from "../input-cribl.js";
import { inputCriblmetricsSchema, type InputCriblmetrics } from "../input-criblmetrics.js";
import { inputCrowdstrikeSchema, type InputCrowdstrike } from "../input-crowdstrike.js";
import { inputDatadogAgentSchema, type InputDatadogAgent } from "../input-datadog-agent.js";
import { inputDatagenSchema, type InputDatagen } from "../input-datagen.js";
import { inputEdgePrometheusSchema, type InputEdgePrometheus } from "../input-edge-prometheus.js";
import { inputElasticSchema, type InputElastic } from "../input-elastic.js";
import { inputEventhubAmqpSchema, type InputEventhubAmqp } from "../input-eventhub-amqp.js";
import { inputEventhubSchema, type InputEventhub } from "../input-eventhub.js";
import { inputExecSchema, type InputExec } from "../input-exec.js";
import { inputExtrahopRevealx360Schema, type InputExtrahopRevealx360 } from "../input-extrahop-revealx360.js";
import { inputF5BigIpSchema, type InputF5BigIp } from "../input-f5-big-ip.js";
import { inputFileSchema, type InputFile } from "../input-file.js";
import { inputFirehoseSchema, type InputFirehose } from "../input-firehose.js";
import { inputGigamonHecSchema, type InputGigamonHec } from "../input-gigamon-hec.js";
import { inputGooglePubsubSchema, type InputGooglePubsub } from "../input-google-pubsub.js";
import { inputGrafanaSchema, type InputGrafana } from "../input-grafana.js";
import {
  inputHashicorpHcpVaultDedicatedSchema,
  type InputHashicorpHcpVaultDedicated,
} from "../input-hashicorp-hcp-vault-dedicated.js";
import { inputHttpRawSchema, type InputHttpRaw } from "../input-http-raw.js";
import { inputHttpSchema, type InputHttp } from "../input-http.js";
import { inputJournalFilesSchema, type InputJournalFiles } from "../input-journal-files.js";
import { inputKafkaSchema, type InputKafka } from "../input-kafka.js";
import { inputKinesisSchema, type InputKinesis } from "../input-kinesis.js";
import { inputKubeEventsSchema, type InputKubeEvents } from "../input-kube-events.js";
import { inputKubeLogsSchema, type InputKubeLogs } from "../input-kube-logs.js";
import { inputKubeMetricsSchema, type InputKubeMetrics } from "../input-kube-metrics.js";
import { inputLokiSchema, type InputLoki } from "../input-loki.js";
import { inputMetricsSchema, type InputMetrics } from "../input-metrics.js";
import { inputMicrosoftCopilotSchema, type InputMicrosoftCopilot } from "../input-microsoft-copilot.js";
import { inputMicrosoftGraphSchema, type InputMicrosoftGraph } from "../input-microsoft-graph.js";
import { inputMimecastHecSchema, type InputMimecastHec } from "../input-mimecast-hec.js";
import {
  inputModelDrivenTelemetrySchema,
  type InputModelDrivenTelemetry,
} from "../input-model-driven-telemetry.js";
import { inputMskSchema, type InputMsk } from "../input-msk.js";
import { inputNetflowSchema, type InputNetflow } from "../input-netflow.js";
import { inputOffice365MgmtSchema, type InputOffice365Mgmt } from "../input-office365-mgmt.js";
import { inputOffice365MsgTraceSchema, type InputOffice365MsgTrace } from "../input-office365-msg-trace.js";
import { inputOffice365ServiceSchema, type InputOffice365Service } from "../input-office365-service.js";
import { inputOktaSchema, type InputOkta } from "../input-okta.js";
import { inputOpenTelemetrySchema, type InputOpenTelemetry } from "../input-open-telemetry.js";
import {
  inputOpenaiComplianceLogsSchema,
  type InputOpenaiComplianceLogs,
} from "../input-openai-compliance-logs.js";
import { inputOpenaiSchema, type InputOpenai } from "../input-openai.js";
import {
  inputPingIdentityPingoneSchema,
  type InputPingIdentityPingone,
} from "../input-ping-identity-pingone.js";
import { inputPrometheusRwSchema, type InputPrometheusRw } from "../input-prometheus-rw.js";
import { inputPrometheusSchema, type InputPrometheus } from "../input-prometheus.js";
import { inputProofpointPodSchema, type InputProofpointPod } from "../input-proofpoint-pod.js";
import { inputRawUdpSchema, type InputRawUdp } from "../input-raw-udp.js";
import { inputS3InventorySchema, type InputS3Inventory } from "../input-s3-inventory.js";
import { inputS3Schema, type InputS3 } from "../input-s3.js";
import { inputSailpointHecSchema, type InputSailpointHec } from "../input-sailpoint-hec.js";
import { inputSecurityLakeSchema, type InputSecurityLake } from "../input-security-lake.js";
import { inputServicenowTableSchema, type InputServicenowTable } from "../input-servicenow-table.js";
import { inputSnmpSchema, type InputSnmp } from "../input-snmp.js";
import { inputSplunkHecSchema, type InputSplunkHec } from "../input-splunk-hec.js";
import { inputSplunkSearchSchema, type InputSplunkSearch } from "../input-splunk-search.js";
import { inputSplunkSchema, type InputSplunk } from "../input-splunk.js";
import { inputSqsSchema, type InputSqs } from "../input-sqs.js";
import { inputSysdigHecSchema, type InputSysdigHec } from "../input-sysdig-hec.js";
import { inputSyslogSchema, type InputSyslog } from "../input-syslog.js";
import { inputSystemMetricsSchema, type InputSystemMetrics } from "../input-system-metrics.js";
import { inputSystemStateSchema, type InputSystemState } from "../input-system-state.js";
import { inputTcpSchema, type InputTcp } from "../input-tcp.js";
import { inputTcpjsonSchema, type InputTcpjson } from "../input-tcpjson.js";
import { inputTrellixHecSchema, type InputTrellixHec } from "../input-trellix-hec.js";
import {
  inputTrendMicroVisionOneSchema,
  type InputTrendMicroVisionOne,
} from "../input-trend-micro-vision-one.js";
import { inputUpwindHecSchema, type InputUpwindHec } from "../input-upwind-hec.js";
import { inputVectraAiHecSchema, type InputVectraAiHec } from "../input-vectra-ai-hec.js";
import { inputWefSchema, type InputWef } from "../input-wef.js";
import { inputWinEventLogsSchema, type InputWinEventLogs } from "../input-win-event-logs.js";
import { inputWindowsMetricsSchema, type InputWindowsMetrics } from "../input-windows-metrics.js";
import { inputWizWebhookSchema, type InputWizWebhook } from "../input-wiz-webhook.js";
import { inputWizSchema, type InputWiz } from "../input-wiz.js";
import { inputZscalerHecSchema, type InputZscalerHec } from "../input-zscaler-hec.js";

export type Input =
  | (InputCollection & { type: "collection" })
  | (InputKafka & { type: "kafka" })
  | (InputMsk & { type: "msk" })
  | (InputHttp & { type: "http" })
  | (InputSplunk & { type: "splunk" })
  | (InputSplunkSearch & { type: "splunk_search" })
  | (InputSplunkHec & { type: "splunk_hec" })
  | (InputAzureBlob & { type: "azure_blob" })
  | (InputAzureVnetFlowLog & { type: "azure_vnet_flow_log" })
  | (InputElastic & { type: "elastic" })
  | (InputConfluentCloud & { type: "confluent_cloud" })
  | (InputGrafana & { type: "grafana" })
  | (InputLoki & { type: "loki" })
  | (InputPrometheusRw & { type: "prometheus_rw" })
  | (InputPrometheus & { type: "prometheus" })
  | (InputEdgePrometheus & { type: "edge_prometheus" })
  | (InputOffice365Mgmt & { type: "office365_mgmt" })
  | (InputOffice365Service & { type: "office365_service" })
  | (InputOffice365MsgTrace & { type: "office365_msg_trace" })
  | (InputMicrosoftGraph & { type: "microsoft_graph" })
  | (InputEventhub & { type: "eventhub" })
  | (InputEventhubAmqp & { type: "eventhub_amqp" })
  | (InputExec & { type: "exec" })
  | (InputFirehose & { type: "firehose" })
  | (InputGooglePubsub & { type: "google_pubsub" })
  | (InputCribl & { type: "cribl" })
  | (InputCriblTcp & { type: "cribl_tcp" })
  | (InputCriblHttp & { type: "cribl_http" })
  | (InputCriblLakeHttp & { type: "cribl_lake_http" })
  | (InputTcpjson & { type: "tcpjson" })
  | (InputSystemMetrics & { type: "system_metrics" })
  | (InputSystemState & { type: "system_state" })
  | (InputKubeMetrics & { type: "kube_metrics" })
  | (InputKubeLogs & { type: "kube_logs" })
  | (InputKubeEvents & { type: "kube_events" })
  | (InputWindowsMetrics & { type: "windows_metrics" })
  | (InputCrowdstrike & { type: "crowdstrike" })
  | (InputDatadogAgent & { type: "datadog_agent" })
  | (InputDatagen & { type: "datagen" })
  | (InputHttpRaw & { type: "http_raw" })
  | (InputKinesis & { type: "kinesis" })
  | (InputCriblmetrics & { type: "criblmetrics" })
  | (InputMetrics & { type: "metrics" })
  | (InputS3 & { type: "s3" })
  | (InputS3Inventory & { type: "s3_inventory" })
  | (InputSnmp & { type: "snmp" })
  | (InputOpenTelemetry & { type: "open_telemetry" })
  | (InputModelDrivenTelemetry & { type: "model_driven_telemetry" })
  | (InputSqs & { type: "sqs" })
  | (InputSyslog & { type: "syslog" })
  | (InputFile & { type: "file" })
  | (InputTcp & { type: "tcp" })
  | (InputAppscope & { type: "appscope" })
  | (InputWef & { type: "wef" })
  | (InputWinEventLogs & { type: "win_event_logs" })
  | (InputAppleUnifiedLogs & { type: "apple_unified_logs" })
  | (InputRawUdp & { type: "raw_udp" })
  | (InputJournalFiles & { type: "journal_files" })
  | (InputWiz & { type: "wiz" })
  | (InputOpenai & { type: "openai" })
  | (InputWizWebhook & { type: "wiz_webhook" })
  | (InputNetflow & { type: "netflow" })
  | (InputSecurityLake & { type: "security_lake" })
  | (InputBedrockS3 & { type: "bedrock_s3" })
  | (InputServicenowTable & { type: "servicenow_table" })
  | (InputProofpointPod & { type: "proofpoint_pod" })
  | (InputZscalerHec & { type: "zscaler_hec" })
  | (InputCloudflareHec & { type: "cloudflare_hec" })
  | (InputSysdigHec & { type: "sysdig_hec" })
  | (InputUpwindHec & { type: "upwind_hec" })
  | (InputTrellixHec & { type: "trellix_hec" })
  | (InputSailpointHec & { type: "sailpoint_hec" })
  | (InputExtrahopRevealx360 & { type: "extrahop_revealx_360" })
  | (InputAquaSecurityHec & { type: "aqua_security_hec" })
  | (InputOpenaiComplianceLogs & { type: "openai_compliance_logs" })
  | (InputAnthropicCompliance & { type: "anthropic_compliance" })
  | (InputAnthropicEnterpriseAnalytics & { type: "anthropic_enterprise_analytics" })
  | (InputMicrosoftCopilot & { type: "microsoft_copilot" })
  | (InputOkta & { type: "okta" })
  | (InputAkamaiHec & { type: "akamai_hec" })
  | (InputPingIdentityPingone & { type: "ping_identity_pingone" })
  | (InputGigamonHec & { type: "gigamon_hec" })
  | (InputVectraAiHec & { type: "vectra_ai_hec" })
  | (InputF5BigIp & { type: "f5_big_ip" })
  | (InputBeyondtrustHec & { type: "beyondtrust_hec" })
  | (InputHashicorpHcpVaultDedicated & { type: "hashicorp_hcp_vault_dedicated" })
  | (InputMimecastHec & { type: "mimecast_hec" })
  | (InputTrendMicroVisionOne & { type: "trend_micro_vision_one" });

export const inputSchema: Schema<Input> = s.discriminatedUnion<Input>("type", {
  collection: inputCollectionSchema,
  kafka: inputKafkaSchema,
  msk: inputMskSchema,
  http: inputHttpSchema,
  splunk: inputSplunkSchema,
  splunk_search: inputSplunkSearchSchema,
  splunk_hec: inputSplunkHecSchema,
  azure_blob: inputAzureBlobSchema,
  azure_vnet_flow_log: inputAzureVnetFlowLogSchema,
  elastic: inputElasticSchema,
  confluent_cloud: inputConfluentCloudSchema,
  grafana: inputGrafanaSchema,
  loki: inputLokiSchema,
  prometheus_rw: inputPrometheusRwSchema,
  prometheus: inputPrometheusSchema,
  edge_prometheus: inputEdgePrometheusSchema,
  office365_mgmt: inputOffice365MgmtSchema,
  office365_service: inputOffice365ServiceSchema,
  office365_msg_trace: inputOffice365MsgTraceSchema,
  microsoft_graph: inputMicrosoftGraphSchema,
  eventhub: inputEventhubSchema,
  eventhub_amqp: inputEventhubAmqpSchema,
  exec: inputExecSchema,
  firehose: inputFirehoseSchema,
  google_pubsub: inputGooglePubsubSchema,
  cribl: inputCriblSchema,
  cribl_tcp: inputCriblTcpSchema,
  cribl_http: inputCriblHttpSchema,
  cribl_lake_http: inputCriblLakeHttpSchema,
  tcpjson: inputTcpjsonSchema,
  system_metrics: inputSystemMetricsSchema,
  system_state: inputSystemStateSchema,
  kube_metrics: inputKubeMetricsSchema,
  kube_logs: inputKubeLogsSchema,
  kube_events: inputKubeEventsSchema,
  windows_metrics: inputWindowsMetricsSchema,
  crowdstrike: inputCrowdstrikeSchema,
  datadog_agent: inputDatadogAgentSchema,
  datagen: inputDatagenSchema,
  http_raw: inputHttpRawSchema,
  kinesis: inputKinesisSchema,
  criblmetrics: inputCriblmetricsSchema,
  metrics: inputMetricsSchema,
  s3: inputS3Schema,
  s3_inventory: inputS3InventorySchema,
  snmp: inputSnmpSchema,
  open_telemetry: inputOpenTelemetrySchema,
  model_driven_telemetry: inputModelDrivenTelemetrySchema,
  sqs: inputSqsSchema,
  syslog: inputSyslogSchema,
  file: inputFileSchema,
  tcp: inputTcpSchema,
  appscope: inputAppscopeSchema,
  wef: inputWefSchema,
  win_event_logs: inputWinEventLogsSchema,
  apple_unified_logs: inputAppleUnifiedLogsSchema,
  raw_udp: inputRawUdpSchema,
  journal_files: inputJournalFilesSchema,
  wiz: inputWizSchema,
  openai: inputOpenaiSchema,
  wiz_webhook: inputWizWebhookSchema,
  netflow: inputNetflowSchema,
  security_lake: inputSecurityLakeSchema,
  bedrock_s3: inputBedrockS3Schema,
  servicenow_table: inputServicenowTableSchema,
  proofpoint_pod: inputProofpointPodSchema,
  zscaler_hec: inputZscalerHecSchema,
  cloudflare_hec: inputCloudflareHecSchema,
  sysdig_hec: inputSysdigHecSchema,
  upwind_hec: inputUpwindHecSchema,
  trellix_hec: inputTrellixHecSchema,
  sailpoint_hec: inputSailpointHecSchema,
  extrahop_revealx_360: inputExtrahopRevealx360Schema,
  aqua_security_hec: inputAquaSecurityHecSchema,
  openai_compliance_logs: inputOpenaiComplianceLogsSchema,
  anthropic_compliance: inputAnthropicComplianceSchema,
  anthropic_enterprise_analytics: inputAnthropicEnterpriseAnalyticsSchema,
  microsoft_copilot: inputMicrosoftCopilotSchema,
  okta: inputOktaSchema,
  akamai_hec: inputAkamaiHecSchema,
  ping_identity_pingone: inputPingIdentityPingoneSchema,
  gigamon_hec: inputGigamonHecSchema,
  vectra_ai_hec: inputVectraAiHecSchema,
  f5_big_ip: inputF5BigIpSchema,
  beyondtrust_hec: inputBeyondtrustHecSchema,
  hashicorp_hcp_vault_dedicated: inputHashicorpHcpVaultDedicatedSchema,
  mimecast_hec: inputMimecastHecSchema,
  trend_micro_vision_one: inputTrendMicroVisionOneSchema,
});
