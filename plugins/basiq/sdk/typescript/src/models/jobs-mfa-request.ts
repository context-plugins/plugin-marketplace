import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JobsMfaRequest = {
  /** One time password or answer to a security question/s e.g. ["1234"] */
  mfaResponse: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsMfaRequestSchema: Schema<JobsMfaRequest> = s.object<JobsMfaRequest>(
  {
    mfaResponse: s.array(s.string()),
    _keysMap: {
      mfaResponse: "mfa-response",
    },
  },
  { additionalProperties: s.json() },
);
