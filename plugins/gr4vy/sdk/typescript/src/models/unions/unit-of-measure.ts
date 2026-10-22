import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The unit of measure or the unit of measure code. */
export type UnitOfMeasure = string;

export const unitOfMeasureSchema: Schema<UnitOfMeasure> = s.of<UnitOfMeasure>(s.union([s.string()]));
