import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BootstrapSendOtpResponse = {
  /** Always true. Says nothing about whether the account existed. */
  sent: boolean;
  /** The normalized (lower-cased, trimmed) address. */
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bootstrapSendOtpResponseProperties: s.Shape<BootstrapSendOtpResponse> = {
  sent: s.boolean(),
  email: s.string(),
};

export const bootstrapSendOtpResponseInternalSchema: Schema<BootstrapSendOtpResponse> =
  s.object<BootstrapSendOtpResponse>(bootstrapSendOtpResponseProperties, { additionalProperties: s.json() });

export const bootstrapSendOtpResponseSchema: Schema<BootstrapSendOtpResponse> = s.lazySchema(() =>
  s.object<BootstrapSendOtpResponse>(
    {
      ...bootstrapSendOtpResponseProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
