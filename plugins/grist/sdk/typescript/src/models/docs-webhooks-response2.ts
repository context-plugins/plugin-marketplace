import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsWebhooksResponse2 = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsWebhooksResponse2Schema: Schema<DocsWebhooksResponse2> = s.object<DocsWebhooksResponse2>(
  {
    success: s.boolean(),
  },
  { additionalProperties: s.json() },
);
