import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { threeDSecureMethodEnumSchema, type ThreeDSecureMethodEnum } from "../three-dsecure-method-enum.js";

/** The method used for 3DS authentication for this transaction. */
export type Method25 = ThreeDSecureMethodEnum;

export const method25Schema: Schema<Method25> = s.of<Method25>(
  s.union([s.lazy(() => threeDSecureMethodEnumSchema)]),
);
