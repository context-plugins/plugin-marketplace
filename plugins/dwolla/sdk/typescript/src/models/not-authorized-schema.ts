import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotAuthorizedSchema = {
  code: string;
  message: string;
};

export const notAuthorizedSchemaSchema: Schema<NotAuthorizedSchema> = s.object<NotAuthorizedSchema>({
  code: s.string(),
  message: s.string(),
});
