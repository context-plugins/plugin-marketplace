import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeAcmeDomainValidationRequest = {
  /** The Amazon Resource Name (ARN) of the ACME domain validation. */
  acmeDomainValidationArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAcmeDomainValidationRequestSchema: Schema<DescribeAcmeDomainValidationRequest> =
  s.object<DescribeAcmeDomainValidationRequest>(
    {
      acmeDomainValidationArn: s.string(),
      _keysMap: {
        acmeDomainValidationArn: "AcmeDomainValidationArn",
      },
    },
    { additionalProperties: s.json() },
  );
