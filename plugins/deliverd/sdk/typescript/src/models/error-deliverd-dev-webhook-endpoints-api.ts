import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type ErrorDeliverdDevWebhookEndpointsApi = {
  code: Code;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorDeliverdDevWebhookEndpointsApiSchema: Schema<ErrorDeliverdDevWebhookEndpointsApi> =
  s.object<ErrorDeliverdDevWebhookEndpointsApi>(
    {
      code: codeSchema,
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
