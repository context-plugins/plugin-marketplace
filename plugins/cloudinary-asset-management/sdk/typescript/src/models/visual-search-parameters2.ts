import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VisualSearchParameters2 = {
  /** A textual description to find visually similar images */
  text: string;
  /**
   * The minimum similarity score (between 0 and 1.0) that a resource must have to be included in
   * the response
   */
  threshold?: number;
};

export const visualSearchParameters2Schema: Schema<VisualSearchParameters2> =
  s.object<VisualSearchParameters2>({
    text: s.string(),
    threshold: s.optional(s.float64()),
  });
