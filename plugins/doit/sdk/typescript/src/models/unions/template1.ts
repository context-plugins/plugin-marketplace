import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { templateSchema, type Template } from "../template.js";

/** Template type or array of template layer IDs to include. */
export type Template1 = Template | string[];

export const template1Schema: Schema<Template1> = s.of<Template1>(
  s.union([s.lazy(() => templateSchema), s.array(s.string())]),
);
