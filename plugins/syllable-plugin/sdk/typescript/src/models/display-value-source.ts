import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { default1Schema, type Default1 } from "./unions/default1.js";
import { pathSchema, type Path } from "./unions/path.js";
import { templateSchema, type Template } from "./unions/template.js";

/** Select or interpolate a value from one item in a tool result. */
export type DisplayValueSource = {
  path?: Path;
  template?: Template;
  default?: Default1;
};

export const displayValueSourceSchema: Schema<DisplayValueSource> = s.object<DisplayValueSource>({
  path: s.optional(s.lazy(() => pathSchema)),
  template: s.optional(s.lazy(() => templateSchema)),
  default: s.optional(s.lazy(() => default1Schema)),
});
