import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudflowV1TriggerResponse = {
  /** Console URL for the started CloudFlow execution history entry. */
  executionLink: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowV1TriggerResponseSchema: Schema<CloudflowV1TriggerResponse> =
  s.object<CloudflowV1TriggerResponse>(
    {
      executionLink: s.string(),
    },
    { additionalProperties: s.json() },
  );
