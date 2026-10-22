import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { contextSchema, type Context } from "../context.js";

/** The configuration for a context tool. */
export type Context11 = Context;

export const context11Schema: Schema<Context11> = s.of<Context11>(s.union([s.lazy(() => contextSchema)]));
