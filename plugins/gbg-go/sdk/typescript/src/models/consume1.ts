import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { combinatorSchema, type Combinator } from "./combinator.js";
import { inputSchema, type Input } from "./input.js";
import { specSchema, type Spec } from "./spec.js";

export type Consume1 = {
  ref: string;
  spec: Spec;
  recommended?: boolean;
  combinator: Combinator;
  inputs: Input[];
};

export const consume1Schema: Schema<Consume1> = s.object<Consume1>({
  ref: s.string(),
  spec: specSchema,
  recommended: s.optional(s.boolean()),
  combinator: combinatorSchema,
  inputs: s.array(s.lazy(() => inputSchema)),
});
