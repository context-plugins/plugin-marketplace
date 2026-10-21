import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains addenda information for the transfer */
export type Addenda = {
  /** An array containing a single string addenda value */
  values?: string[];
};

export const addendaSchema: Schema<Addenda> = s.object<Addenda>({
  values: s.optional(s.array(s.string())),
});
