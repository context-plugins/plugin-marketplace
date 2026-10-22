import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates to PowerTranz whether to skip the 3DS authentication for this transaction. */
export type Skipthreedsecure = boolean;

export const skipthreedsecureSchema: Schema<Skipthreedsecure> = s.of<Skipthreedsecure>(
  s.union([s.boolean()]),
);
