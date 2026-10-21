import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ParameterRep = {
  variationId?: string;
  flagKey?: string;
};

export const parameterRepSchema: Schema<ParameterRep> = s.object<ParameterRep>({
  variationId: s.optional(s.string()),
  flagKey: s.optional(s.string()),
});
