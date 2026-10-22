import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { checkoutSessionUpdateSchema, type CheckoutSessionUpdate } from "../checkout-session-update.js";

export type Body3 = CheckoutSessionUpdate | Record<string, unknown>[];

export const body3Schema: Schema<Body3> = s.of<Body3>(
  s.union([s.lazy(() => checkoutSessionUpdateSchema), s.array(s.record(s.string(), s.unknown()))]),
);
