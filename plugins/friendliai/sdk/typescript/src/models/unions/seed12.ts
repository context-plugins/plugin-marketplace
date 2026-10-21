import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Seed to control random procedure. If nothing is given, random seed is used for sampling, and
 * return the seed along with the generated result. When using the `n` argument, you can pass a list
 * of seed values to control all of the independent generations.
 */
export type Seed12 = number[] | number;

export const seed12Schema: Schema<Seed12> = s.of<Seed12>(s.union([s.array(s.int()), s.int()]));
