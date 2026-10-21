import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { specSchema, type Spec } from "./spec.js";

export type Collect = {
  ref: string;
  spec: Spec;
  recommended?: boolean;
};

export const collectSchema: Schema<Collect> = s.object<Collect>({
  ref: s.string(),
  spec: specSchema,
  recommended: s.optional(s.boolean()),
});
