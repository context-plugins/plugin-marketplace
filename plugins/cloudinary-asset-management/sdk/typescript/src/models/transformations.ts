import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Transformations = {
  /** Number of transformations used */
  usage?: number;
};

export const transformationsSchema: Schema<Transformations> = s.object<Transformations>({
  usage: s.optional(s.int()),
});
