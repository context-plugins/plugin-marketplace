import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestoredRecordSchema = {
  recordId: string;
  /** The name it has now */
  name?: string | null;
  /** Its name before restore, when another item next to it had taken that name */
  renamedFrom?: string;
};

export const restoredRecordSchemaSchema: Schema<RestoredRecordSchema> = s.object<RestoredRecordSchema>({
  recordId: s.string(),
  name: s.optionalNullable(s.string()),
  renamedFrom: s.optional(s.string()),
});
