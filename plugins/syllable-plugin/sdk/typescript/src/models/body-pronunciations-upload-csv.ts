import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BodyPronunciationsUploadCsv = {
  /** CSV file containing pronunciation overrides */
  file: Uint8Array;
};

export const bodyPronunciationsUploadCsvSchema: Schema<BodyPronunciationsUploadCsv> =
  s.object<BodyPronunciationsUploadCsv>({
    file: s.bytes(),
  });
