import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RenameField = {
  /** Name of the field to rename. Literal identifiers must be quoted. */
  currentName: string;
  /** The name the field will be renamed to. Literal identifiers must be quoted. */
  newName: string;
};

export const renameFieldSchema: Schema<RenameField> = s.object<RenameField>({
  currentName: s.string(),
  newName: s.string(),
});
