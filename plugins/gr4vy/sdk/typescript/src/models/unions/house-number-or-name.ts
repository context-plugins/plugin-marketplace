import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The house number or name for the address. Not all payment services use this field but some do.
 */
export type HouseNumberOrName = string;

export const houseNumberOrNameSchema: Schema<HouseNumberOrName> = s.of<HouseNumberOrName>(
  s.union([s.string()]),
);
