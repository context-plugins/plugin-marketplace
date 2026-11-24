import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { prevalidationOptionsSchema, type PrevalidationOptions } from "./prevalidation-options.js";

export type UpdateAcmeDomainValidationRequest = {
  /** The Amazon Resource Name (ARN) of the ACME domain validation to update. */
  acmeDomainValidationArn: string;
  /** Exactly one member is set. */
  prevalidationOptions?: PrevalidationOptions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateAcmeDomainValidationRequestSchema: Schema<UpdateAcmeDomainValidationRequest> =
  s.object<UpdateAcmeDomainValidationRequest>(
    {
      acmeDomainValidationArn: s.string(),
      prevalidationOptions: s.optional(s.lazy(() => prevalidationOptionsSchema)),
      _keysMap: {
        acmeDomainValidationArn: "AcmeDomainValidationArn",
        prevalidationOptions: "PrevalidationOptions",
      },
    },
    { additionalProperties: s.json() },
  );
