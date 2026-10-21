import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VariationToolPost = {
  /** The key of the tool to use. */
  key: string;
  /** The version of the tool. */
  version: number;
};

export const variationToolPostSchema: Schema<VariationToolPost> = s.object<VariationToolPost>({
  key: s.string(),
  version: s.int(),
});
