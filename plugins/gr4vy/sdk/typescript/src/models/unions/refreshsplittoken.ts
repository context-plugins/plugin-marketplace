import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates to Gr4vy whether or not the stored Trustly agreement needs refreshing. */
export type Refreshsplittoken = boolean;

export const refreshsplittokenSchema: Schema<Refreshsplittoken> = s.of<Refreshsplittoken>(
  s.union([s.boolean()]),
);
