import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { specSchema, type Spec } from "./spec.js";

export type Input = {
  ref: string;
  spec: Spec;
  recommended?: boolean;
};

export const inputSchema: Schema<Input> = s.object<Input>({
  ref: s.string(),
  spec: specSchema,
  recommended: s.optional(s.boolean()),
});
