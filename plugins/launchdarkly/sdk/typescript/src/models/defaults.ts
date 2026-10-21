import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Defaults = {
  /**
   * The index, from the array of variations for this flag, of the variation to serve by default
   * when targeting is on.
   */
  onVariation: number;
  /**
   * The index, from the array of variations for this flag, of the variation to serve by default
   * when targeting is off.
   */
  offVariation: number;
};

export const defaultsSchema: Schema<Defaults> = s.object<Defaults>({
  onVariation: s.int(),
  offVariation: s.int(),
});
