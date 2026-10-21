import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  functionAggregateMetricsSchema,
  type FunctionAggregateMetrics,
} from "../function-aggregate-metrics.js";
import { functionAggregationSchema, type FunctionAggregation } from "../function-aggregation.js";
import { functionAutoTimestampSchema, type FunctionAutoTimestamp } from "../function-auto-timestamp.js";
import { functionCefSchema, type FunctionCef } from "../function-cef.js";
import { functionChainSchema, type FunctionChain } from "../function-chain.js";
import { functionCloneSchema, type FunctionClone } from "../function-clone.js";
import { functionCodeSchema, type FunctionCode } from "../function-code.js";
import { functionCommentSchema, type FunctionComment } from "../function-comment.js";
import { functionDetectionRulesSchema, type FunctionDetectionRules } from "../function-detection-rules.js";
import { functionDistinctSchema, type FunctionDistinct } from "../function-distinct.js";
import { functionDnsLookupSchema, type FunctionDnsLookup } from "../function-dns-lookup.js";
import { functionDropDimensionsSchema, type FunctionDropDimensions } from "../function-drop-dimensions.js";
import { functionDropSchema, type FunctionDrop } from "../function-drop.js";
import { functionDynamicSamplingSchema, type FunctionDynamicSampling } from "../function-dynamic-sampling.js";
import { functionEvalSchema, type FunctionEval } from "../function-eval.js";
import { functionEventBreakerSchema, type FunctionEventBreaker } from "../function-event-breaker.js";
import { functionEventstatsSchema, type FunctionEventstats } from "../function-eventstats.js";
import { functionExternaldataSchema, type FunctionExternaldata } from "../function-externaldata.js";
import { functionFlattenSchema, type FunctionFlatten } from "../function-flatten.js";
import { functionFoldkeysSchema, type FunctionFoldkeys } from "../function-foldkeys.js";
import { functionGenStatsSchema, type FunctionGenStats } from "../function-gen-stats.js";
import { functionGeoipSchema, type FunctionGeoip } from "../function-geoip.js";
import { functionGrokSchema, type FunctionGrok } from "../function-grok.js";
import { functionHandlebarsSchema, type FunctionHandlebars } from "../function-handlebars.js";
import { functionJoinSchema, type FunctionJoin } from "../function-join.js";
import { functionJsonUnrollSchema, type FunctionJsonUnroll } from "../function-json-unroll.js";
import { functionLakeExportSchema, type FunctionLakeExport } from "../function-lake-export.js";
import {
  functionLakehouseEngineMetricsNormalizerSchema,
  type FunctionLakehouseEngineMetricsNormalizer,
} from "../function-lakehouse-engine-metrics-normalizer.js";
import { functionLimitSchema, type FunctionLimit } from "../function-limit.js";
import {
  functionLocalSearchDatatypeParserSchema,
  type FunctionLocalSearchDatatypeParser,
} from "../function-local-search-datatype-parser.js";
import {
  functionLocalSearchDatatypeSchemaMapperSchema,
  type FunctionLocalSearchDatatypeSchemaMapper,
} from "../function-local-search-datatype-schema-mapper.js";
import {
  functionLocalSearchRulesetRunnerSchema,
  type FunctionLocalSearchRulesetRunner,
} from "../function-local-search-ruleset-runner.js";
import {
  functionLocalSearchSchemaMapperSchema,
  type FunctionLocalSearchSchemaMapper,
} from "../function-local-search-schema-mapper.js";
import {
  functionLocalSearchTimeRangeNormalizerSchema,
  type FunctionLocalSearchTimeRangeNormalizer,
} from "../function-local-search-time-range-normalizer.js";
import {
  functionLocalSearchTransformerSchema,
  type FunctionLocalSearchTransformer,
} from "../function-local-search-transformer.js";
import { functionLookupSchema, type FunctionLookup } from "../function-lookup.js";
import { functionMaskSchema, type FunctionMask } from "../function-mask.js";
import { functionMetricsExportSchema, type FunctionMetricsExport } from "../function-metrics-export.js";
import {
  functionMetricsTimeRangeGateSchema,
  type FunctionMetricsTimeRangeGate,
} from "../function-metrics-time-range-gate.js";
import { functionMvExpandSchema, type FunctionMvExpand } from "../function-mv-expand.js";
import { functionMvPullSchema, type FunctionMvPull } from "../function-mv-pull.js";
import {
  functionNotificationPoliciesSchema,
  type FunctionNotificationPolicies,
} from "../function-notification-policies.js";
import { functionNotificationsSchema, type FunctionNotifications } from "../function-notifications.js";
import { functionNotifySchema, type FunctionNotify } from "../function-notify.js";
import { functionNumerifySchema, type FunctionNumerify } from "../function-numerify.js";
import { functionOtlpLogsSchema, type FunctionOtlpLogs } from "../function-otlp-logs.js";
import { functionOtlpMetricsSchema, type FunctionOtlpMetrics } from "../function-otlp-metrics.js";
import { functionOtlpTracesSchema, type FunctionOtlpTraces } from "../function-otlp-traces.js";
import { functionPackSchema, type FunctionPack } from "../function-pack.js";
import { functionPivotSchema, type FunctionPivot } from "../function-pivot.js";
import { functionPublishMetricsSchema, type FunctionPublishMetrics } from "../function-publish-metrics.js";
import { functionRedisSchema, type FunctionRedis } from "../function-redis.js";
import { functionRegexExtractSchema, type FunctionRegexExtract } from "../function-regex-extract.js";
import { functionRegexFilterSchema, type FunctionRegexFilter } from "../function-regex-filter.js";
import { functionRenameSchema, type FunctionRename } from "../function-rename.js";
import { functionRollupMetricsSchema, type FunctionRollupMetrics } from "../function-rollup-metrics.js";
import { functionSamplingSchema, type FunctionSampling } from "../function-sampling.js";
import {
  functionSearchEngineExportSchema,
  type FunctionSearchEngineExport,
} from "../function-search-engine-export.js";
import { functionSendSchema, type FunctionSend } from "../function-send.js";
import {
  functionSensitiveDataScannerSchema,
  type FunctionSensitiveDataScanner,
} from "../function-sensitive-data-scanner.js";
import { functionSerdeSchema, type FunctionSerde } from "../function-serde.js";
import { functionSerializeSchema, type FunctionSerialize } from "../function-serialize.js";
import { functionSidlookupSchema, type FunctionSidlookup } from "../function-sidlookup.js";
import {
  functionSnmpTrapSerializeSchema,
  type FunctionSnmpTrapSerialize,
} from "../function-snmp-trap-serialize.js";
import { functionSortSchema, type FunctionSort } from "../function-sort.js";
import { functionStoreSchema, type FunctionStore } from "../function-store.js";
import { functionSuppressSchema, type FunctionSuppress } from "../function-suppress.js";
import { functionTeeSchema, type FunctionTee } from "../function-tee.js";
import { functionTrimTimestampSchema, type FunctionTrimTimestamp } from "../function-trim-timestamp.js";
import { functionUnionSchema, type FunctionUnion } from "../function-union.js";
import { functionUnrollSchema, type FunctionUnroll } from "../function-unroll.js";
import { functionWindowSchema, type FunctionWindow } from "../function-window.js";
import { functionXmlUnrollSchema, type FunctionXmlUnroll } from "../function-xml-unroll.js";

export type FunctionResponse =
  | (FunctionAggregateMetrics & { id: "aggregate_metrics" })
  | (FunctionAggregation & { id: "aggregation" })
  | (FunctionAutoTimestamp & { id: "auto_timestamp" })
  | (FunctionCef & { id: "cef" })
  | (FunctionChain & { id: "chain" })
  | (FunctionClone & { id: "clone" })
  | (FunctionCode & { id: "code" })
  | (FunctionComment & { id: "comment" })
  | (FunctionDetectionRules & { id: "detection_rules" })
  | (FunctionDistinct & { id: "distinct" })
  | (FunctionDnsLookup & { id: "dns_lookup" })
  | (FunctionDrop & { id: "drop" })
  | (FunctionDropDimensions & { id: "drop_dimensions" })
  | (FunctionDynamicSampling & { id: "dynamic_sampling" })
  | (FunctionEval & { id: "eval" })
  | (FunctionEventBreaker & { id: "event_breaker" })
  | (FunctionEventstats & { id: "eventstats" })
  | (FunctionExternaldata & { id: "externaldata" })
  | (FunctionFlatten & { id: "flatten" })
  | (FunctionFoldkeys & { id: "foldkeys" })
  | (FunctionGenStats & { id: "gen_stats" })
  | (FunctionGeoip & { id: "geoip" })
  | (FunctionGrok & { id: "grok" })
  | (FunctionHandlebars & { id: "handlebars" })
  | (FunctionJoin & { id: "join" })
  | (FunctionJsonUnroll & { id: "json_unroll" })
  | (FunctionLakeExport & { id: "lake_export" })
  | (FunctionLakehouseEngineMetricsNormalizer & { id: "lakehouse_engine_metrics_normalizer" })
  | (FunctionLimit & { id: "limit" })
  | (FunctionLocalSearchDatatypeParser & { id: "local_search_datatype_parser" })
  | (FunctionLocalSearchDatatypeSchemaMapper & { id: "local_search_datatype_schema_mapper" })
  | (FunctionLocalSearchRulesetRunner & { id: "local_search_ruleset_runner" })
  | (FunctionLocalSearchSchemaMapper & { id: "local_search_schema_mapper" })
  | (FunctionLocalSearchTimeRangeNormalizer & { id: "local_search_time_range_normalizer" })
  | (FunctionLocalSearchTransformer & { id: "local_search_transformer" })
  | (FunctionLookup & { id: "lookup" })
  | (FunctionMask & { id: "mask" })
  | (FunctionMetricsExport & { id: "metrics_export" })
  | (FunctionMetricsTimeRangeGate & { id: "metrics_time_range_gate" })
  | (FunctionMvExpand & { id: "mv_expand" })
  | (FunctionMvPull & { id: "mv_pull" })
  | (FunctionNotificationPolicies & { id: "notification_policies" })
  | (FunctionNotifications & { id: "notifications" })
  | (FunctionNotify & { id: "notify" })
  | (FunctionNumerify & { id: "numerify" })
  | (FunctionOtlpLogs & { id: "otlp_logs" })
  | (FunctionOtlpMetrics & { id: "otlp_metrics" })
  | (FunctionOtlpTraces & { id: "otlp_traces" })
  | (FunctionPack & { id: "pack" })
  | (FunctionPivot & { id: "pivot" })
  | (FunctionPublishMetrics & { id: "publish_metrics" })
  | (FunctionRedis & { id: "redis" })
  | (FunctionRegexExtract & { id: "regex_extract" })
  | (FunctionRegexFilter & { id: "regex_filter" })
  | (FunctionRename & { id: "rename" })
  | (FunctionRollupMetrics & { id: "rollup_metrics" })
  | (FunctionSampling & { id: "sampling" })
  | (FunctionSearchEngineExport & { id: "search_engine_export" })
  | (FunctionSend & { id: "send" })
  | (FunctionSensitiveDataScanner & { id: "sensitive_data_scanner" })
  | (FunctionSerde & { id: "serde" })
  | (FunctionSerialize & { id: "serialize" })
  | (FunctionSidlookup & { id: "sidlookup" })
  | (FunctionSnmpTrapSerialize & { id: "snmp_trap_serialize" })
  | (FunctionSort & { id: "sort" })
  | (FunctionStore & { id: "store" })
  | (FunctionSuppress & { id: "suppress" })
  | (FunctionTee & { id: "tee" })
  | (FunctionTrimTimestamp & { id: "trim_timestamp" })
  | (FunctionUnion & { id: "union" })
  | (FunctionUnroll & { id: "unroll" })
  | (FunctionWindow & { id: "window" })
  | (FunctionXmlUnroll & { id: "xml_unroll" });

export const functionResponseSchema: Schema<FunctionResponse> = s.discriminatedUnion<FunctionResponse>("id", {
  aggregate_metrics: functionAggregateMetricsSchema,
  aggregation: functionAggregationSchema,
  auto_timestamp: functionAutoTimestampSchema,
  cef: functionCefSchema,
  chain: functionChainSchema,
  clone: functionCloneSchema,
  code: functionCodeSchema,
  comment: functionCommentSchema,
  detection_rules: functionDetectionRulesSchema,
  distinct: functionDistinctSchema,
  dns_lookup: functionDnsLookupSchema,
  drop: functionDropSchema,
  drop_dimensions: functionDropDimensionsSchema,
  dynamic_sampling: functionDynamicSamplingSchema,
  eval: functionEvalSchema,
  event_breaker: functionEventBreakerSchema,
  eventstats: functionEventstatsSchema,
  externaldata: functionExternaldataSchema,
  flatten: functionFlattenSchema,
  foldkeys: functionFoldkeysSchema,
  gen_stats: functionGenStatsSchema,
  geoip: functionGeoipSchema,
  grok: functionGrokSchema,
  handlebars: functionHandlebarsSchema,
  join: functionJoinSchema,
  json_unroll: functionJsonUnrollSchema,
  lake_export: functionLakeExportSchema,
  lakehouse_engine_metrics_normalizer: functionLakehouseEngineMetricsNormalizerSchema,
  limit: functionLimitSchema,
  local_search_datatype_parser: functionLocalSearchDatatypeParserSchema,
  local_search_datatype_schema_mapper: functionLocalSearchDatatypeSchemaMapperSchema,
  local_search_ruleset_runner: functionLocalSearchRulesetRunnerSchema,
  local_search_schema_mapper: functionLocalSearchSchemaMapperSchema,
  local_search_time_range_normalizer: functionLocalSearchTimeRangeNormalizerSchema,
  local_search_transformer: functionLocalSearchTransformerSchema,
  lookup: functionLookupSchema,
  mask: functionMaskSchema,
  metrics_export: functionMetricsExportSchema,
  metrics_time_range_gate: functionMetricsTimeRangeGateSchema,
  mv_expand: functionMvExpandSchema,
  mv_pull: functionMvPullSchema,
  notification_policies: functionNotificationPoliciesSchema,
  notifications: functionNotificationsSchema,
  notify: functionNotifySchema,
  numerify: functionNumerifySchema,
  otlp_logs: functionOtlpLogsSchema,
  otlp_metrics: functionOtlpMetricsSchema,
  otlp_traces: functionOtlpTracesSchema,
  pack: functionPackSchema,
  pivot: functionPivotSchema,
  publish_metrics: functionPublishMetricsSchema,
  redis: functionRedisSchema,
  regex_extract: functionRegexExtractSchema,
  regex_filter: functionRegexFilterSchema,
  rename: functionRenameSchema,
  rollup_metrics: functionRollupMetricsSchema,
  sampling: functionSamplingSchema,
  search_engine_export: functionSearchEngineExportSchema,
  send: functionSendSchema,
  sensitive_data_scanner: functionSensitiveDataScannerSchema,
  serde: functionSerdeSchema,
  serialize: functionSerializeSchema,
  sidlookup: functionSidlookupSchema,
  snmp_trap_serialize: functionSnmpTrapSerializeSchema,
  sort: functionSortSchema,
  store: functionStoreSchema,
  suppress: functionSuppressSchema,
  tee: functionTeeSchema,
  trim_timestamp: functionTrimTimestampSchema,
  union: functionUnionSchema,
  unroll: functionUnrollSchema,
  window: functionWindowSchema,
  xml_unroll: functionXmlUnrollSchema,
});
