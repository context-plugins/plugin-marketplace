import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BootstrapSendOtpRequest = {
  /** The address that will receive the code and own the account. */
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bootstrapSendOtpRequestProperties: s.Shape<BootstrapSendOtpRequest> = {
  email: s.string(),
};

export const bootstrapSendOtpRequestInternalSchema: Schema<BootstrapSendOtpRequest> =
  s.object<BootstrapSendOtpRequest>(bootstrapSendOtpRequestProperties, { additionalProperties: s.json() });

export const bootstrapSendOtpRequestSchema: Schema<BootstrapSendOtpRequest> = s.lazySchema(() =>
  s.object<BootstrapSendOtpRequest>(
    {
      ...bootstrapSendOtpRequestProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
