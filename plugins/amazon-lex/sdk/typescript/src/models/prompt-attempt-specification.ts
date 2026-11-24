import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allowedInputTypesSchema, type AllowedInputTypes } from "./allowed-input-types.js";
import {
  audioAndDtmfInputSpecificationSchema,
  type AudioAndDtmfInputSpecification,
} from "./audio-and-dtmf-input-specification.js";
import { textInputSpecificationSchema, type TextInputSpecification } from "./text-input-specification.js";

export type PromptAttemptSpecification = {
  /** Indicates whether the user can interrupt a speech prompt attempt from the bot. */
  allowInterrupt?: boolean;
  allowedInputTypes: AllowedInputTypes;
  audioAndDtmfInputSpecification?: AudioAndDtmfInputSpecification;
  textInputSpecification?: TextInputSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const promptAttemptSpecificationSchema: Schema<PromptAttemptSpecification> =
  s.object<PromptAttemptSpecification>(
    {
      allowInterrupt: s.optional(s.boolean()),
      allowedInputTypes: allowedInputTypesSchema,
      audioAndDtmfInputSpecification: s.optional(s.lazy(() => audioAndDtmfInputSpecificationSchema)),
      textInputSpecification: s.optional(s.lazy(() => textInputSpecificationSchema)),
      _keysMap: {
        audioAndDtmfInputSpecification: "audioAndDTMFInputSpecification",
      },
    },
    { additionalProperties: s.json() },
  );
