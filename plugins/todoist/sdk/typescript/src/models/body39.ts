import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body39 = {
  /** Short identifier of the cancellation reason category. */
  reasonFlag?: string;
  /** Human-readable label of the cancellation reason. */
  reasonDescription?: string;
  /** Free-form feedback from the user about the cancellation. */
  reasonText?: string;
  /** URL the user is redirected to after completing the flow. */
  returnUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body39Schema: Schema<Body39> = s.object<Body39>(
  {
    reasonFlag: s.optional(s.string()),
    reasonDescription: s.optional(s.string()),
    reasonText: s.optional(s.string()),
    returnUrl: s.optional(s.string()),
    _keysMap: {
      reasonFlag: "reason_flag",
      reasonDescription: "reason_description",
      reasonText: "reason_text",
      returnUrl: "return_url",
    },
  },
  { additionalProperties: s.json() },
);
