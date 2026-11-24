import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateAcmeDomainValidationResponse = {
  /** The Amazon Resource Name (ARN) of the created domain validation. */
  acmeDomainValidationArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAcmeDomainValidationResponseSchema: Schema<CreateAcmeDomainValidationResponse> =
  s.object<CreateAcmeDomainValidationResponse>(
    {
      acmeDomainValidationArn: s.string(),
      _keysMap: {
        acmeDomainValidationArn: "AcmeDomainValidationArn",
      },
    },
    { additionalProperties: s.json() },
  );
