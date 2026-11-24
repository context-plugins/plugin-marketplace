import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum2ConnectionsApiSchema, type Datum2ConnectionsApi } from "./datum2-connections-api.js";

export type Reports403Error1 = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum2ConnectionsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reports403Error1Schema: Schema<Reports403Error1> = s.object<Reports403Error1>(
  {
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum2ConnectionsApiSchema)),
  },
  { additionalProperties: s.json() },
);
