import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The purpose of the data you've provided in the augmented manifest. You can either train or test
 * this data. If you don't specify, the default is train. TRAIN - all of the documents in the
 * manifest will be used for training. If no test documents are provided, Amazon Comprehend will
 * automatically reserve a portion of the training documents for testing. TEST - all of the
 * documents in the manifest will be used for testing.
 */
export const Split = {
  Train: "TRAIN",
  Test: "TEST",
} as const;
export type Split = (typeof Split)[keyof typeof Split] | (string & {});

export const splitSchema: EnumSchema<Split> = s.enumOf<Split>(Split);
