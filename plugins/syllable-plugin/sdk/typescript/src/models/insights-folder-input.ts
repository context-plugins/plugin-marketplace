import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description22Schema, type Description22 } from "./unions/description22.js";
import { label6Schema, type Label6 } from "./unions/label6.js";

/** Request model to create/update an insight upload folder. */
export type InsightsFolderInput = {
  /** Human-readable name of insight folder */
  name: string;
  /** optional label assigned to insight folder */
  label?: Label6;
  /** Text description of insight upload folder */
  description?: Description22;
};

export const insightsFolderInputSchema: Schema<InsightsFolderInput> = s.object<InsightsFolderInput>({
  name: s.string(),
  label: s.optional(s.lazy(() => label6Schema)),
  description: s.optional(s.lazy(() => description22Schema)),
});
