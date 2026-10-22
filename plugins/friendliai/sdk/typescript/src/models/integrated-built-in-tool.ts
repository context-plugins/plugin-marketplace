import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IntegratedBuiltInTool = {
  /** The type of the integrated third-party tool. @default "linkup:search" */
  type?: "linkup:search";
};

export const integratedBuiltInToolSchema: Schema<IntegratedBuiltInTool> = s.object<IntegratedBuiltInTool>({
  type: s.defaulted(s.literal("linkup:search"), "linkup:search"),
});
