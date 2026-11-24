import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * COMPREHEND_CSV: The data format is a two-column CSV file, where the first column contains labels
 * and the second column contains documents. AUGMENTED_MANIFEST: The data format
 */
export const DataFormat = {
  ComprehendCsv: "COMPREHEND_CSV",
  AugmentedManifest: "AUGMENTED_MANIFEST",
} as const;
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat] | (string & {});

export const dataFormatSchema: EnumSchema<DataFormat> = s.enumOf<DataFormat>(DataFormat);
