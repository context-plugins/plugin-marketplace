import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Modification = {
  date?: Date;
};

export const modificationSchema: Schema<Modification> = s.object<Modification>({
  date: s.optional(s.dateTime()),
});
