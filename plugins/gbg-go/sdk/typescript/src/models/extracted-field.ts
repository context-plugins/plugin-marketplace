import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detailSchema, type Detail } from "./detail.js";

export type ExtractedField = {
  label: string;
  details: Detail[];
};

export const extractedFieldSchema: Schema<ExtractedField> = s.object<ExtractedField>({
  label: s.string(),
  details: s.array(s.lazy(() => detailSchema)),
});
