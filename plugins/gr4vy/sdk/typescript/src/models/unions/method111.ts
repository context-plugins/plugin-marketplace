import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { methodSchema, type Method } from "../method.js";

/** Return any payment service for this method. */
export type Method111 = Method;

export const method111Schema: Schema<Method111> = s.of<Method111>(s.union([s.lazy(() => methodSchema)]));
