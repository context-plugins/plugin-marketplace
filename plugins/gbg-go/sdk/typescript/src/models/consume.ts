import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { specSchema, type Spec } from "./spec.js";

export type Consume = {
  ref: string;
  spec: Spec;
  recommended?: boolean;
};

export const consumeSchema: Schema<Consume> = s.object<Consume>({
  ref: s.string(),
  spec: specSchema,
  recommended: s.optional(s.boolean()),
});
