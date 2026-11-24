import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. Client secret for OAuth Client Credentials. */
export type Secret1 = {
  /** Optional. Input only. The actual raw value of the secret as plain text. */
  rawValue?: string;
  /**
   * Optional. A Secret Manager resource name storing the actual value of the secret. Supported
   * formats: * projects/{project}/locations/{location}/secrets/{secret}/versions/{version} *
   * projects/{project}/secrets/{secret}/versions/{version}
   */
  secretVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const secret1Schema: Schema<Secret1> = s.object<Secret1>(
  {
    rawValue: s.optional(s.string()),
    secretVersion: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
