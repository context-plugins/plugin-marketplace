import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Seed to control random procedure. If nothing is given, the API generate the seed randomly, use it
 * for sampling, and return the seed along with the generated result. When using the `n` argument,
 * you can pass a list of seed values to control all of the independent generations.
 */
export type Seed = number[] | number;

export const seedSchema: Schema<Seed> = s.of<Seed>(s.union([s.array(s.int()), s.int()]));
