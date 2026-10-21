import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prefixOptionalSchema, type PrefixOptional } from "./prefix-optional.js";

export type ExtentTag = {
  /** Prefix (optional) */
  prefix?: PrefixOptional;
  /** Value */
  value: string;
};

export const extentTagSchema: Schema<ExtentTag> = s.object<ExtentTag>({
  prefix: s.optional(s.lazy(() => prefixOptionalSchema)),
  value: s.string(),
});
