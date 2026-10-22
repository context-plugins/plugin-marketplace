import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregatedFieldSchema, type AggregatedField } from "./aggregated-field.js";
import { extractedFieldSchema, type ExtractedField } from "./extracted-field.js";
import { extractedImageSchema, type ExtractedImage } from "./extracted-image.js";

export type Extraction = {
  aggregatedFields?: AggregatedField[];
  extractedFields?: ExtractedField[];
  extractedImages?: ExtractedImage[];
};

export const extractionSchema: Schema<Extraction> = s.object<Extraction>({
  aggregatedFields: s.optional(s.array(s.lazy(() => aggregatedFieldSchema))),
  extractedFields: s.optional(s.array(s.lazy(() => extractedFieldSchema))),
  extractedImages: s.optional(s.array(s.lazy(() => extractedImageSchema))),
});
