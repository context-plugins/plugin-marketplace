import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumWebhooksApiSchema, type DatumWebhooksApi } from "./datum-webhooks-api.js";

export type Error = {
  /** Always "list". */
  type?: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId?: string;
  /** Error data. */
  data?: DatumWebhooksApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    type: s.optional(s.string()),
    correlationId: s.optional(s.string()),
    data: s.optional(s.array(s.lazy(() => datumWebhooksApiSchema))),
  },
  { additionalProperties: s.json() },
);
