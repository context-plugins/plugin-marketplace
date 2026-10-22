import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { methodSchema, type Method } from "../method.js";

/** The method used for the transaction. */
export type Method241 = Method;

export const method241Schema: Schema<Method241> = s.of<Method241>(s.union([s.lazy(() => methodSchema)]));
