import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./value.js";

export type DatumInstagramGraphInsightsApi = {
  name?: string;
  period?: string;
  values?: Value[];
  title?: string;
  description?: string;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumInstagramGraphInsightsApiSchema: Schema<DatumInstagramGraphInsightsApi> =
  s.object<DatumInstagramGraphInsightsApi>(
    {
      name: s.optional(s.string()),
      period: s.optional(s.string()),
      values: s.optional(s.array(s.lazy(() => valueSchema))),
      title: s.optional(s.string()),
      description: s.optional(s.string()),
      id: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
