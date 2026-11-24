import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { stepInternalSchema, stepSchema, type Step } from "../step.js";
import { step1InternalSchema, step1Schema, type Step1 } from "../step1.js";
import { step3InternalSchema, step3Schema, type Step3 } from "../step3.js";
import { step4InternalSchema, step4Schema, type Step4 } from "../step4.js";

export type Step2 = Step | Step1 | Step3 | Step4;

export const step2InternalSchema: Schema<Step2> = s.of<Step2>(
  s.union([
    s.lazy(() => stepInternalSchema),
    s.lazy(() => step1InternalSchema),
    s.lazy(() => step3InternalSchema),
    s.lazy(() => step4InternalSchema),
  ]),
);

export const step2Schema: Schema<Step2> = s.lazySchema(() =>
  s.of<Step2>(
    s.union([
      s.lazy(() => stepSchema),
      s.lazy(() => step1Schema),
      s.lazy(() => step3Schema),
      s.lazy(() => step4Schema),
    ]),
  ),
);
