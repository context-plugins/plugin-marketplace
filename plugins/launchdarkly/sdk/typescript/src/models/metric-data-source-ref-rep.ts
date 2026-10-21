import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MetricDataSourceRefRep = {
  key: string;
  environmentKey?: string;
  name?: string;
  integrationKey?: string;
};

export const metricDataSourceRefRepSchema: Schema<MetricDataSourceRefRep> = s.object<MetricDataSourceRefRep>({
  key: s.string(),
  environmentKey: s.optional(s.string()),
  name: s.optional(s.string()),
  integrationKey: s.optional(s.string()),
  _keysMap: {
    name: "_name",
    integrationKey: "_integrationKey",
  },
});
