import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The format of your training data: COMPREHEND_CSV: A two-column CSV file, where labels are
 * provided in the first column, and documents are provided in the second. If you use this value,
 * you must provide the S3Uri parameter in your request. AUGMENTED_MANIFEST: A labeled dataset that
 * is produced by Amazon SageMaker Ground Truth. This file is in JSON lines format. Each line is a
 * complete JSON object that contains a training document and its associated labels. If you use this
 * value, you must provide the AugmentedManifests parameter in your request. If you don't specify a
 * value, Amazon Comprehend us
 */
export const DataFormat1 = {
  ComprehendCsv: "COMPREHEND_CSV",
  AugmentedManifest: "AUGMENTED_MANIFEST",
} as const;
export type DataFormat1 = (typeof DataFormat1)[keyof typeof DataFormat1] | (string & {});

export const dataFormat1Schema: EnumSchema<DataFormat1> = s.enumOf<DataFormat1>(DataFormat1);
