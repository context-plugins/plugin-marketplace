import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A parameter we recognized but could not honor, named rather than silently dropped. */
export type ResponseWarning = {
  parameter: string;
  /** `caveat` informs; anything else means a filter did NOT apply. */
  severity: string;
  reason: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseWarningSchema: Schema<ResponseWarning> = s.object<ResponseWarning>(
  {
    parameter: s.string(),
    severity: s.string(),
    reason: s.string(),
  },
  { additionalProperties: s.json() },
);
