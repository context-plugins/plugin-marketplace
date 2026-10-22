import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { code1Schema, type Code1 } from "./unions/code1.js";
import { componentSchema, type Component } from "./unions/component.js";
import { description5Schema, type Description5 } from "./unions/description5.js";
import { detailSchema, type Detail } from "./unions/detail.js";

export type ThreeDSecureError = {
  /** The error code. */
  code?: Code1;
  /** The error description. */
  description?: Description5;
  /** Detail about the 3DS error. */
  detail?: Detail;
  /** Code indicating the 3-D Secure component that identified the error. */
  component?: Component;
};

export const threeDSecureErrorSchema: Schema<ThreeDSecureError> = s.object<ThreeDSecureError>({
  code: s.optional(s.lazy(() => code1Schema)),
  description: s.optional(s.lazy(() => description5Schema)),
  detail: s.optional(s.lazy(() => detailSchema)),
  component: s.optional(s.lazy(() => componentSchema)),
});
