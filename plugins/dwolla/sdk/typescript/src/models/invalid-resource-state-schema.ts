import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvalidResourceStateSchema = {
  code: string;
  message: string;
};

export const invalidResourceStateSchemaSchema: Schema<InvalidResourceStateSchema> =
  s.object<InvalidResourceStateSchema>({
    code: s.string(),
    message: s.string(),
  });
