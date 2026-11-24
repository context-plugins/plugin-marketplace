import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2WebhooksTestResponse = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2WebhooksTestResponseSchema: Schema<ApiV2WebhooksTestResponse> =
  s.object<ApiV2WebhooksTestResponse>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
