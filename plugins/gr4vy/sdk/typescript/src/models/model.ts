import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The report model type. */
export const Model = {
  AiInsights: "ai_insights",
} as const;
export type Model = (typeof Model)[keyof typeof Model] | (string & {});

export const modelSchema: EnumSchema<Model> = s.enumOf<Model>(Model);
