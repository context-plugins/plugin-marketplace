import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Target = {
  /**
   * A list of the keys for targets that will receive this variation because of individual targeting
   */
  values: string[];
  /**
   * The index, from the array of variations for this flag, of the variation to serve this list of
   * targets
   */
  variation: number;
  /** The context kind of the individual target */
  contextKind?: string;
};

export const targetSchema: Schema<Target> = s.object<Target>({
  values: s.array(s.string()),
  variation: s.int(),
  contextKind: s.optional(s.string()),
});
