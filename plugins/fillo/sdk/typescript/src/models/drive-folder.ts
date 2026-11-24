import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The Google Drive folder a form's uploads land in. Both keys are null when Fillo manages the
 * folder automatically.
 */
export type DriveFolder = {
  id: string | null;
  name: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const driveFolderSchema: Schema<DriveFolder> = s.object<DriveFolder>(
  {
    id: s.nullable(s.string()),
    name: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
