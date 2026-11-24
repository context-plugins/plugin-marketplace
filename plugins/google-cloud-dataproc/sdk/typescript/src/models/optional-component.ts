import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OptionalComponent = {
  ComponentUnspecified: "COMPONENT_UNSPECIFIED",
  AlloydbConnector: "ALLOYDB_CONNECTOR",
  Anaconda: "ANACONDA",
  Delta: "DELTA",
  Docker: "DOCKER",
  Druid: "DRUID",
  Flink: "FLINK",
  Hbase: "HBASE",
  HiveWebhcat: "HIVE_WEBHCAT",
  Hudi: "HUDI",
  Iceberg: "ICEBERG",
  Jupyter: "JUPYTER",
  Pig: "PIG",
  Presto: "PRESTO",
  Trino: "TRINO",
  Ranger: "RANGER",
  Solr: "SOLR",
  Zeppelin: "ZEPPELIN",
  Zookeeper: "ZOOKEEPER",
  JupyterKernelGateway: "JUPYTER_KERNEL_GATEWAY",
} as const;
export type OptionalComponent = (typeof OptionalComponent)[keyof typeof OptionalComponent] | (string & {});

export const optionalComponentSchema: EnumSchema<OptionalComponent> =
  s.enumOf<OptionalComponent>(OptionalComponent);
