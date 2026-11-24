import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The format of your training data: COMPREHEND_CSV: A CSV file that supplements your training
 * documents. The CSV file contains information about the custom entities that your trained model
 * will detect. The required format of the file depends on whether you are providing annotations or
 * an entity list. If you use this value, you must provide your CSV file by using either the
 * Annotations or EntityList parameters. You must provide your training documents by using the
 * Documents parameter. AUGMENTED_MANIFEST: A labeled dataset that is produced by Amazon SageMaker
 * Ground Truth. This file is in JSON lin
 */
export const DataFormat2 = {
  ComprehendCsv: "COMPREHEND_CSV",
  AugmentedManifest: "AUGMENTED_MANIFEST",
} as const;
export type DataFormat2 = (typeof DataFormat2)[keyof typeof DataFormat2] | (string & {});

export const dataFormat2Schema: EnumSchema<DataFormat2> = s.enumOf<DataFormat2>(DataFormat2);
