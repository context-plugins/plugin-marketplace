import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data2EnrichApiSchema, type Data2EnrichApi } from "./data2-enrich-api.js";

export type Enrich403Error1 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data2EnrichApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrich403Error1Schema: Schema<Enrich403Error1> = s.object<Enrich403Error1>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => data2EnrichApiSchema)),
  },
  { additionalProperties: s.json() },
);
