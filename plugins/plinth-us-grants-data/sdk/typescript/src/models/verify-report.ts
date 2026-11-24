import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VerifyReport = {
  /** A retained compliance response, exactly as returned. */
  body: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const verifyReportSchema: Schema<VerifyReport> = s.object<VerifyReport>(
  {
    body: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
