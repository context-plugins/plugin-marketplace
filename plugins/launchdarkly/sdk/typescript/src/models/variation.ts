import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Variation = {
  /** The ID of the variation. Leave empty when you are creating a flag. */
  id?: string;
  /**
   * The value of the variation. For boolean flags, this must be <code>true</code> or
   * <code>false</code>. For multivariate flags, this may be a string, number, or JSON object.
   */
  value: Record<string, unknown>;
  /**
   * Description of the variation. Defaults to an empty string, but is omitted from the response if
   * not set.
   */
  description?: string;
  /**
   * A human-friendly name for the variation. Defaults to an empty string, but is omitted from the
   * response if not set.
   */
  name?: string;
};

export const variationSchema: Schema<Variation> = s.object<Variation>({
  id: s.optional(s.string()),
  value: s.record(s.string(), s.unknown()),
  description: s.optional(s.string()),
  name: s.optional(s.string()),
  _keysMap: {
    id: "_id",
  },
});
