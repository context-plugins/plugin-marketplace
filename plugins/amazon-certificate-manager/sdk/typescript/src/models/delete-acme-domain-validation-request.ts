import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteAcmeDomainValidationRequest = {
  /** The Amazon Resource Name (ARN) of the ACME domain validation to delete. */
  acmeDomainValidationArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteAcmeDomainValidationRequestSchema: Schema<DeleteAcmeDomainValidationRequest> =
  s.object<DeleteAcmeDomainValidationRequest>(
    {
      acmeDomainValidationArn: s.string(),
      _keysMap: {
        acmeDomainValidationArn: "AcmeDomainValidationArn",
      },
    },
    { additionalProperties: s.json() },
  );
