import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pathSchema, type Path } from "./unions/path.js";

/** Reference to a field by its original text and parsed path segments. */
export type NameFieldType = {
  /** Field name or expression before parsing. */
  raw: string;
  /**
   * Path segments for the field name. For example, <code>["level1", "level2"]</code> represents
   * <code>level1.level2</code>.
   */
  path: Path[];
  /**
   * If <code>true</code>, <code>raw</code> is a constant value rather than a field to read from the
   * event.
   */
  literal?: boolean;
};

export const nameFieldTypeSchema: Schema<NameFieldType> = s.object<NameFieldType>({
  raw: s.string(),
  path: s.array(s.lazy(() => pathSchema)),
  literal: s.optional(s.boolean()),
});
