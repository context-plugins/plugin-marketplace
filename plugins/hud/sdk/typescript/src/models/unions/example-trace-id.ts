import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExampleTraceId = string;

export const exampleTraceIdSchema: Schema<ExampleTraceId> = s.of<ExampleTraceId>(s.union([s.string()]));
