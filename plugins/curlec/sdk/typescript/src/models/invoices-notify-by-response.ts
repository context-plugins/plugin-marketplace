import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvoicesNotifyByResponse = {
  success?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoicesNotifyByResponseSchema: Schema<InvoicesNotifyByResponse> =
  s.object<InvoicesNotifyByResponse>(
    {
      success: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
