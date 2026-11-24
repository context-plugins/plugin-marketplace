import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Step = {
  waitDays?: number;
  subject?: string;
  body?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stepSchema: Schema<Step> = s.object<Step>(
  {
    waitDays: s.optional(s.int()),
    subject: s.optional(s.string()),
    body: s.optional(s.string()),
    _keysMap: {
      waitDays: "wait_days",
    },
  },
  { additionalProperties: s.json() },
);
