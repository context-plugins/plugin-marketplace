import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  pipelineFunctionAggregateMetricsSchema,
  type PipelineFunctionAggregateMetrics,
} from "../pipeline-function-aggregate-metrics.js";
import {
  pipelineFunctionAggregationSchema,
  type PipelineFunctionAggregation,
} from "../pipeline-function-aggregation.js";
import {
  pipelineFunctionAutoTimestampSchema,
  type PipelineFunctionAutoTimestamp,
} from "../pipeline-function-auto-timestamp.js";
import { pipelineFunctionCefSchema, type PipelineFunctionCef } from "../pipeline-function-cef.js";
import { pipelineFunctionChainSchema, type PipelineFunctionChain } from "../pipeline-function-chain.js";
import { pipelineFunctionCloneSchema, type PipelineFunctionClone } from "../pipeline-function-clone.js";
import { pipelineFunctionCodeSchema, type PipelineFunctionCode } from "../pipeline-function-code.js";
import { pipelineFunctionCommentSchema, type PipelineFunctionComment } from "../pipeline-function-comment.js";
import {
  pipelineFunctionDetectionRulesSchema,
  type PipelineFunctionDetectionRules,
} from "../pipeline-function-detection-rules.js";
import {
  pipelineFunctionDistinctSchema,
  type PipelineFunctionDistinct,
} from "../pipeline-function-distinct.js";
import {
  pipelineFunctionDnsLookupSchema,
  type PipelineFunctionDnsLookup,
} from "../pipeline-function-dns-lookup.js";
import {
  pipelineFunctionDropDimensionsSchema,
  type PipelineFunctionDropDimensions,
} from "../pipeline-function-drop-dimensions.js";
import { pipelineFunctionDropSchema, type PipelineFunctionDrop } from "../pipeline-function-drop.js";
import {
  pipelineFunctionDynamicSamplingSchema,
  type PipelineFunctionDynamicSampling,
} from "../pipeline-function-dynamic-sampling.js";
import { pipelineFunctionEvalSchema, type PipelineFunctionEval } from "../pipeline-function-eval.js";
import {
  pipelineFunctionEventBreakerSchema,
  type PipelineFunctionEventBreaker,
} from "../pipeline-function-event-breaker.js";
import {
  pipelineFunctionEventstatsSchema,
  type PipelineFunctionEventstats,
} from "../pipeline-function-eventstats.js";
import {
  pipelineFunctionExternaldataSchema,
  type PipelineFunctionExternaldata,
} from "../pipeline-function-externaldata.js";
import { pipelineFunctionFlattenSchema, type PipelineFunctionFlatten } from "../pipeline-function-flatten.js";
import {
  pipelineFunctionFoldkeysSchema,
  type PipelineFunctionFoldkeys,
} from "../pipeline-function-foldkeys.js";
import {
  pipelineFunctionGenStatsSchema,
  type PipelineFunctionGenStats,
} from "../pipeline-function-gen-stats.js";
import { pipelineFunctionGeoipSchema, type PipelineFunctionGeoip } from "../pipeline-function-geoip.js";
import { pipelineFunctionGrokSchema, type PipelineFunctionGrok } from "../pipeline-function-grok.js";
import {
  pipelineFunctionHandlebarsSchema,
  type PipelineFunctionHandlebars,
} from "../pipeline-function-handlebars.js";
import { pipelineFunctionJoinSchema, type PipelineFunctionJoin } from "../pipeline-function-join.js";
import {
  pipelineFunctionJsonUnrollSchema,
  type PipelineFunctionJsonUnroll,
} from "../pipeline-function-json-unroll.js";
import {
  pipelineFunctionLakeExportSchema,
  type PipelineFunctionLakeExport,
} from "../pipeline-function-lake-export.js";
import {
  pipelineFunctionLakehouseEngineMetricsNormalizerSchema,
  type PipelineFunctionLakehouseEngineMetricsNormalizer,
} from "../pipeline-function-lakehouse-engine-metrics-normalizer.js";
import { pipelineFunctionLimitSchema, type PipelineFunctionLimit } from "../pipeline-function-limit.js";
import {
  pipelineFunctionLocalSearchDatatypeParserSchema,
  type PipelineFunctionLocalSearchDatatypeParser,
} from "../pipeline-function-local-search-datatype-parser.js";
import {
  pipelineFunctionLocalSearchDatatypeSchemaMapperSchema,
  type PipelineFunctionLocalSearchDatatypeSchemaMapper,
} from "../pipeline-function-local-search-datatype-schema-mapper.js";
import {
  pipelineFunctionLocalSearchRulesetRunnerSchema,
  type PipelineFunctionLocalSearchRulesetRunner,
} from "../pipeline-function-local-search-ruleset-runner.js";
import {
  pipelineFunctionLocalSearchSchemaMapperSchema,
  type PipelineFunctionLocalSearchSchemaMapper,
} from "../pipeline-function-local-search-schema-mapper.js";
import {
  pipelineFunctionLocalSearchTimeRangeNormalizerSchema,
  type PipelineFunctionLocalSearchTimeRangeNormalizer,
} from "../pipeline-function-local-search-time-range-normalizer.js";
import {
  pipelineFunctionLocalSearchTransformerSchema,
  type PipelineFunctionLocalSearchTransformer,
} from "../pipeline-function-local-search-transformer.js";
import { pipelineFunctionLookupSchema, type PipelineFunctionLookup } from "../pipeline-function-lookup.js";
import { pipelineFunctionMaskSchema, type PipelineFunctionMask } from "../pipeline-function-mask.js";
import {
  pipelineFunctionMetricsExportSchema,
  type PipelineFunctionMetricsExport,
} from "../pipeline-function-metrics-export.js";
import {
  pipelineFunctionMetricsTimeRangeGateSchema,
  type PipelineFunctionMetricsTimeRangeGate,
} from "../pipeline-function-metrics-time-range-gate.js";
import {
  pipelineFunctionMvExpandSchema,
  type PipelineFunctionMvExpand,
} from "../pipeline-function-mv-expand.js";
import { pipelineFunctionMvPullSchema, type PipelineFunctionMvPull } from "../pipeline-function-mv-pull.js";
import {
  pipelineFunctionNotificationPoliciesSchema,
  type PipelineFunctionNotificationPolicies,
} from "../pipeline-function-notification-policies.js";
import {
  pipelineFunctionNotificationsSchema,
  type PipelineFunctionNotifications,
} from "../pipeline-function-notifications.js";
import { pipelineFunctionNotifySchema, type PipelineFunctionNotify } from "../pipeline-function-notify.js";
import {
  pipelineFunctionNumerifySchema,
  type PipelineFunctionNumerify,
} from "../pipeline-function-numerify.js";
import {
  pipelineFunctionOtlpLogsSchema,
  type PipelineFunctionOtlpLogs,
} from "../pipeline-function-otlp-logs.js";
import {
  pipelineFunctionOtlpMetricsSchema,
  type PipelineFunctionOtlpMetrics,
} from "../pipeline-function-otlp-metrics.js";
import {
  pipelineFunctionOtlpTracesSchema,
  type PipelineFunctionOtlpTraces,
} from "../pipeline-function-otlp-traces.js";
import { pipelineFunctionPackSchema, type PipelineFunctionPack } from "../pipeline-function-pack.js";
import { pipelineFunctionPivotSchema, type PipelineFunctionPivot } from "../pipeline-function-pivot.js";
import {
  pipelineFunctionPublishMetricsSchema,
  type PipelineFunctionPublishMetrics,
} from "../pipeline-function-publish-metrics.js";
import { pipelineFunctionRedisSchema, type PipelineFunctionRedis } from "../pipeline-function-redis.js";
import {
  pipelineFunctionRegexExtractSchema,
  type PipelineFunctionRegexExtract,
} from "../pipeline-function-regex-extract.js";
import {
  pipelineFunctionRegexFilterSchema,
  type PipelineFunctionRegexFilter,
} from "../pipeline-function-regex-filter.js";
import { pipelineFunctionRenameSchema, type PipelineFunctionRename } from "../pipeline-function-rename.js";
import {
  pipelineFunctionRollupMetricsSchema,
  type PipelineFunctionRollupMetrics,
} from "../pipeline-function-rollup-metrics.js";
import {
  pipelineFunctionSamplingSchema,
  type PipelineFunctionSampling,
} from "../pipeline-function-sampling.js";
import {
  pipelineFunctionSearchEngineExportSchema,
  type PipelineFunctionSearchEngineExport,
} from "../pipeline-function-search-engine-export.js";
import { pipelineFunctionSendSchema, type PipelineFunctionSend } from "../pipeline-function-send.js";
import {
  pipelineFunctionSensitiveDataScannerSchema,
  type PipelineFunctionSensitiveDataScanner,
} from "../pipeline-function-sensitive-data-scanner.js";
import { pipelineFunctionSerdeSchema, type PipelineFunctionSerde } from "../pipeline-function-serde.js";
import {
  pipelineFunctionSerializeSchema,
  type PipelineFunctionSerialize,
} from "../pipeline-function-serialize.js";
import {
  pipelineFunctionSidlookupSchema,
  type PipelineFunctionSidlookup,
} from "../pipeline-function-sidlookup.js";
import {
  pipelineFunctionSnmpTrapSerializeSchema,
  type PipelineFunctionSnmpTrapSerialize,
} from "../pipeline-function-snmp-trap-serialize.js";
import { pipelineFunctionSortSchema, type PipelineFunctionSort } from "../pipeline-function-sort.js";
import { pipelineFunctionStoreSchema, type PipelineFunctionStore } from "../pipeline-function-store.js";
import {
  pipelineFunctionSuppressSchema,
  type PipelineFunctionSuppress,
} from "../pipeline-function-suppress.js";
import { pipelineFunctionTeeSchema, type PipelineFunctionTee } from "../pipeline-function-tee.js";
import {
  pipelineFunctionTrimTimestampSchema,
  type PipelineFunctionTrimTimestamp,
} from "../pipeline-function-trim-timestamp.js";
import { pipelineFunctionUnionSchema, type PipelineFunctionUnion } from "../pipeline-function-union.js";
import { pipelineFunctionUnrollSchema, type PipelineFunctionUnroll } from "../pipeline-function-unroll.js";
import { pipelineFunctionWindowSchema, type PipelineFunctionWindow } from "../pipeline-function-window.js";
import {
  pipelineFunctionXmlUnrollSchema,
  type PipelineFunctionXmlUnroll,
} from "../pipeline-function-xml-unroll.js";

export type PipelineFunctionConf =
  | (PipelineFunctionAggregateMetrics & { id: "aggregate_metrics" })
  | (PipelineFunctionAggregation & { id: "aggregation" })
  | (PipelineFunctionAutoTimestamp & { id: "auto_timestamp" })
  | (PipelineFunctionCef & { id: "cef" })
  | (PipelineFunctionChain & { id: "chain" })
  | (PipelineFunctionClone & { id: "clone" })
  | (PipelineFunctionCode & { id: "code" })
  | (PipelineFunctionComment & { id: "comment" })
  | (PipelineFunctionDetectionRules & { id: "detection_rules" })
  | (PipelineFunctionDistinct & { id: "distinct" })
  | (PipelineFunctionDnsLookup & { id: "dns_lookup" })
  | (PipelineFunctionDrop & { id: "drop" })
  | (PipelineFunctionDropDimensions & { id: "drop_dimensions" })
  | (PipelineFunctionDynamicSampling & { id: "dynamic_sampling" })
  | (PipelineFunctionEval & { id: "eval" })
  | (PipelineFunctionEventBreaker & { id: "event_breaker" })
  | (PipelineFunctionEventstats & { id: "eventstats" })
  | (PipelineFunctionExternaldata & { id: "externaldata" })
  | (PipelineFunctionFlatten & { id: "flatten" })
  | (PipelineFunctionFoldkeys & { id: "foldkeys" })
  | (PipelineFunctionGenStats & { id: "gen_stats" })
  | (PipelineFunctionGeoip & { id: "geoip" })
  | (PipelineFunctionGrok & { id: "grok" })
  | (PipelineFunctionHandlebars & { id: "handlebars" })
  | (PipelineFunctionJoin & { id: "join" })
  | (PipelineFunctionJsonUnroll & { id: "json_unroll" })
  | (PipelineFunctionLakeExport & { id: "lake_export" })
  | (PipelineFunctionLakehouseEngineMetricsNormalizer & { id: "lakehouse_engine_metrics_normalizer" })
  | (PipelineFunctionLimit & { id: "limit" })
  | (PipelineFunctionLocalSearchDatatypeParser & { id: "local_search_datatype_parser" })
  | (PipelineFunctionLocalSearchDatatypeSchemaMapper & { id: "local_search_datatype_schema_mapper" })
  | (PipelineFunctionLocalSearchRulesetRunner & { id: "local_search_ruleset_runner" })
  | (PipelineFunctionLocalSearchSchemaMapper & { id: "local_search_schema_mapper" })
  | (PipelineFunctionLocalSearchTimeRangeNormalizer & { id: "local_search_time_range_normalizer" })
  | (PipelineFunctionLocalSearchTransformer & { id: "local_search_transformer" })
  | (PipelineFunctionLookup & { id: "lookup" })
  | (PipelineFunctionMask & { id: "mask" })
  | (PipelineFunctionMetricsExport & { id: "metrics_export" })
  | (PipelineFunctionMetricsTimeRangeGate & { id: "metrics_time_range_gate" })
  | (PipelineFunctionMvExpand & { id: "mv_expand" })
  | (PipelineFunctionMvPull & { id: "mv_pull" })
  | (PipelineFunctionNotificationPolicies & { id: "notification_policies" })
  | (PipelineFunctionNotifications & { id: "notifications" })
  | (PipelineFunctionNotify & { id: "notify" })
  | (PipelineFunctionNumerify & { id: "numerify" })
  | (PipelineFunctionOtlpLogs & { id: "otlp_logs" })
  | (PipelineFunctionOtlpMetrics & { id: "otlp_metrics" })
  | (PipelineFunctionOtlpTraces & { id: "otlp_traces" })
  | (PipelineFunctionPack & { id: "pack" })
  | (PipelineFunctionPivot & { id: "pivot" })
  | (PipelineFunctionPublishMetrics & { id: "publish_metrics" })
  | (PipelineFunctionRedis & { id: "redis" })
  | (PipelineFunctionRegexExtract & { id: "regex_extract" })
  | (PipelineFunctionRegexFilter & { id: "regex_filter" })
  | (PipelineFunctionRename & { id: "rename" })
  | (PipelineFunctionRollupMetrics & { id: "rollup_metrics" })
  | (PipelineFunctionSampling & { id: "sampling" })
  | (PipelineFunctionSearchEngineExport & { id: "search_engine_export" })
  | (PipelineFunctionSend & { id: "send" })
  | (PipelineFunctionSensitiveDataScanner & { id: "sensitive_data_scanner" })
  | (PipelineFunctionSerde & { id: "serde" })
  | (PipelineFunctionSerialize & { id: "serialize" })
  | (PipelineFunctionSidlookup & { id: "sidlookup" })
  | (PipelineFunctionSnmpTrapSerialize & { id: "snmp_trap_serialize" })
  | (PipelineFunctionSort & { id: "sort" })
  | (PipelineFunctionStore & { id: "store" })
  | (PipelineFunctionSuppress & { id: "suppress" })
  | (PipelineFunctionTee & { id: "tee" })
  | (PipelineFunctionTrimTimestamp & { id: "trim_timestamp" })
  | (PipelineFunctionUnion & { id: "union" })
  | (PipelineFunctionUnroll & { id: "unroll" })
  | (PipelineFunctionWindow & { id: "window" })
  | (PipelineFunctionXmlUnroll & { id: "xml_unroll" });

export const pipelineFunctionConfSchema: Schema<PipelineFunctionConf> =
  s.discriminatedUnion<PipelineFunctionConf>("id", {
    aggregate_metrics: pipelineFunctionAggregateMetricsSchema,
    aggregation: pipelineFunctionAggregationSchema,
    auto_timestamp: pipelineFunctionAutoTimestampSchema,
    cef: pipelineFunctionCefSchema,
    chain: pipelineFunctionChainSchema,
    clone: pipelineFunctionCloneSchema,
    code: pipelineFunctionCodeSchema,
    comment: pipelineFunctionCommentSchema,
    detection_rules: pipelineFunctionDetectionRulesSchema,
    distinct: pipelineFunctionDistinctSchema,
    dns_lookup: pipelineFunctionDnsLookupSchema,
    drop: pipelineFunctionDropSchema,
    drop_dimensions: pipelineFunctionDropDimensionsSchema,
    dynamic_sampling: pipelineFunctionDynamicSamplingSchema,
    eval: pipelineFunctionEvalSchema,
    event_breaker: pipelineFunctionEventBreakerSchema,
    eventstats: pipelineFunctionEventstatsSchema,
    externaldata: pipelineFunctionExternaldataSchema,
    flatten: pipelineFunctionFlattenSchema,
    foldkeys: pipelineFunctionFoldkeysSchema,
    gen_stats: pipelineFunctionGenStatsSchema,
    geoip: pipelineFunctionGeoipSchema,
    grok: pipelineFunctionGrokSchema,
    handlebars: pipelineFunctionHandlebarsSchema,
    join: pipelineFunctionJoinSchema,
    json_unroll: pipelineFunctionJsonUnrollSchema,
    lake_export: pipelineFunctionLakeExportSchema,
    lakehouse_engine_metrics_normalizer: pipelineFunctionLakehouseEngineMetricsNormalizerSchema,
    limit: pipelineFunctionLimitSchema,
    local_search_datatype_parser: pipelineFunctionLocalSearchDatatypeParserSchema,
    local_search_datatype_schema_mapper: pipelineFunctionLocalSearchDatatypeSchemaMapperSchema,
    local_search_ruleset_runner: pipelineFunctionLocalSearchRulesetRunnerSchema,
    local_search_schema_mapper: pipelineFunctionLocalSearchSchemaMapperSchema,
    local_search_time_range_normalizer: pipelineFunctionLocalSearchTimeRangeNormalizerSchema,
    local_search_transformer: pipelineFunctionLocalSearchTransformerSchema,
    lookup: pipelineFunctionLookupSchema,
    mask: pipelineFunctionMaskSchema,
    metrics_export: pipelineFunctionMetricsExportSchema,
    metrics_time_range_gate: pipelineFunctionMetricsTimeRangeGateSchema,
    mv_expand: pipelineFunctionMvExpandSchema,
    mv_pull: pipelineFunctionMvPullSchema,
    notification_policies: pipelineFunctionNotificationPoliciesSchema,
    notifications: pipelineFunctionNotificationsSchema,
    notify: pipelineFunctionNotifySchema,
    numerify: pipelineFunctionNumerifySchema,
    otlp_logs: pipelineFunctionOtlpLogsSchema,
    otlp_metrics: pipelineFunctionOtlpMetricsSchema,
    otlp_traces: pipelineFunctionOtlpTracesSchema,
    pack: pipelineFunctionPackSchema,
    pivot: pipelineFunctionPivotSchema,
    publish_metrics: pipelineFunctionPublishMetricsSchema,
    redis: pipelineFunctionRedisSchema,
    regex_extract: pipelineFunctionRegexExtractSchema,
    regex_filter: pipelineFunctionRegexFilterSchema,
    rename: pipelineFunctionRenameSchema,
    rollup_metrics: pipelineFunctionRollupMetricsSchema,
    sampling: pipelineFunctionSamplingSchema,
    search_engine_export: pipelineFunctionSearchEngineExportSchema,
    send: pipelineFunctionSendSchema,
    sensitive_data_scanner: pipelineFunctionSensitiveDataScannerSchema,
    serde: pipelineFunctionSerdeSchema,
    serialize: pipelineFunctionSerializeSchema,
    sidlookup: pipelineFunctionSidlookupSchema,
    snmp_trap_serialize: pipelineFunctionSnmpTrapSerializeSchema,
    sort: pipelineFunctionSortSchema,
    store: pipelineFunctionStoreSchema,
    suppress: pipelineFunctionSuppressSchema,
    tee: pipelineFunctionTeeSchema,
    trim_timestamp: pipelineFunctionTrimTimestampSchema,
    union: pipelineFunctionUnionSchema,
    unroll: pipelineFunctionUnrollSchema,
    window: pipelineFunctionWindowSchema,
    xml_unroll: pipelineFunctionXmlUnrollSchema,
  });
