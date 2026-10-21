import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description4Schema, type Description4 } from "./unions/description4.js";
import { nameSchema, type Name } from "./unions/name.js";

export type ContextToolInfo = {
  /** The name of the generated tool. */
  name?: Name;
  /** The description of the tool. */
  description?: Description4;
};

export const contextToolInfoSchema: Schema<ContextToolInfo> = s.object<ContextToolInfo>({
  name: s.optional(s.lazy(() => nameSchema)),
  description: s.optional(s.lazy(() => description4Schema)),
});
