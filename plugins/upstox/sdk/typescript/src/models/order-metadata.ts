import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OrderMetadata = {
  latency?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderMetadataSchema: Schema<OrderMetadata> = s.object<OrderMetadata>(
  {
    latency: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
