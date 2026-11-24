import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumEnrichApiSchema, type DatumEnrichApi } from "./datum-enrich-api.js";

export type MerchantNotFoundError = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: DatumEnrichApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const merchantNotFoundErrorSchema: Schema<MerchantNotFoundError> = s.object<MerchantNotFoundError>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datumEnrichApiSchema)),
  },
  { additionalProperties: s.json() },
);
