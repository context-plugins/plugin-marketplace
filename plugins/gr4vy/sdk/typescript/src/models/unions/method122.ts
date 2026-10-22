import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { methodSchema, type Method } from "../method.js";

export type Method122 = Method;

export const method122Schema: Schema<Method122> = s.of<Method122>(s.union([s.lazy(() => methodSchema)]));
