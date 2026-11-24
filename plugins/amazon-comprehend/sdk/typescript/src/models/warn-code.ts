import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of warning. */
export const WarnCode = {
  InferencingPlaintextWithNativeTrainedModel: "INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL",
  InferencingNativeDocumentWithPlaintextTrainedModel:
    "INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL",
} as const;
export type WarnCode = (typeof WarnCode)[keyof typeof WarnCode] | (string & {});

export const warnCodeSchema: EnumSchema<WarnCode> = s.enumOf<WarnCode>(WarnCode);
