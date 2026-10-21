import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deposit1Schema, type Deposit1 } from "./deposit1.js";
import { deposit2Schema, type Deposit2 } from "./deposit2.js";

/**
 * ACH details for each micro-deposit. Optional; only returned when ACH details are available for
 * the micro-deposits. `deposit1` or `deposit2` may be omitted if details for that deposit are
 * unavailable.
 */
export type AchDetails1 = {
  /** ACH details for the first micro-deposit */
  deposit1?: Deposit1;
  /** ACH details for the second micro-deposit */
  deposit2?: Deposit2;
};

export const achDetails1Schema: Schema<AchDetails1> = s.object<AchDetails1>({
  deposit1: s.optional(s.lazy(() => deposit1Schema)),
  deposit2: s.optional(s.lazy(() => deposit2Schema)),
});
