import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formatInfosResponseSchema, type FormatInfosResponse } from "./format-infos-response.js";
import { signerSchema, type Signer } from "./signer.js";
import { validationInfosResponseSchema, type ValidationInfosResponse } from "./validation-infos-response.js";

/** (Optional) Additional information details */
export type OptionalValidationInfos1 = {
  signer?: Signer[];
  format?: FormatInfosResponse;
  validation?: ValidationInfosResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optionalValidationInfos1Schema: Schema<OptionalValidationInfos1> =
  s.object<OptionalValidationInfos1>(
    {
      signer: s.optional(s.array(s.lazy(() => signerSchema))),
      format: s.optional(s.lazy(() => formatInfosResponseSchema)),
      validation: s.optional(s.lazy(() => validationInfosResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
