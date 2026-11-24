import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StatsJuriSignWebhooksApi = {
  success?: number;
  failed?: number;
  pending?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statsJuriSignWebhooksApiSchema: Schema<StatsJuriSignWebhooksApi> =
  s.object<StatsJuriSignWebhooksApi>(
    {
      success: s.optional(s.int()),
      failed: s.optional(s.int()),
      pending: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
