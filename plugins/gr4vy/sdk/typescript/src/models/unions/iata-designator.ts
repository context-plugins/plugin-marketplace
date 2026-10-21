import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Two-character IATA code of the airline. */
export type IataDesignator = string;

export const iataDesignatorSchema: Schema<IataDesignator> = s.of<IataDesignator>(s.union([s.string()]));
