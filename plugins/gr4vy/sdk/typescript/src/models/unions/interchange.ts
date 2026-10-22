import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The interchange fee, if applicable, in the smallest currency unit. */
export type Interchange = number;

export const interchangeSchema: Schema<Interchange> = s.of<Interchange>(s.union([s.int()]));
