import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsWebhooksQueueResponse = {
  success?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsWebhooksQueueResponseSchema: Schema<DocsWebhooksQueueResponse> =
  s.object<DocsWebhooksQueueResponse>(
    {
      success: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
