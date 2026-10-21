import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidFileTypeSchema = {
  code: string;
  message: string;
};

export const invalidFileTypeSchemaSchema: Schema<InvalidFileTypeSchema> = s.object<InvalidFileTypeSchema>({
  code: s.string(),
  message: s.string(),
});
