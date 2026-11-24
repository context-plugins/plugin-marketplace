import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDeleteNotificationRuleResponse = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDeleteNotificationRuleResponseSchema: Schema<PublicApiDeleteNotificationRuleResponse> =
  s.object<PublicApiDeleteNotificationRuleResponse>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
