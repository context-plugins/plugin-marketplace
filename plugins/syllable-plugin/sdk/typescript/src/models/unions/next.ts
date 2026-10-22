import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { nextStepSchema, type NextStep } from "../next-step.js";

export type Next = NextStep | string;

export const nextSchema: Schema<Next> = s.of<Next>(s.union([s.lazy(() => nextStepSchema), s.string()]));
