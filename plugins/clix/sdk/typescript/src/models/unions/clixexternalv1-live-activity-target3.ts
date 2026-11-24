import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  clixexternalv1LiveActivityTargetSchema,
  type Clixexternalv1LiveActivityTarget,
} from "../clixexternalv1-live-activity-target.js";
import {
  clixexternalv1LiveActivityTarget1Schema,
  type Clixexternalv1LiveActivityTarget1,
} from "../clixexternalv1-live-activity-target1.js";
import {
  clixexternalv1LiveActivityTarget2Schema,
  type Clixexternalv1LiveActivityTarget2,
} from "../clixexternalv1-live-activity-target2.js";

/** Target device and/or user for the live activity. */
export type Clixexternalv1LiveActivityTarget3 =
  | Clixexternalv1LiveActivityTarget
  | Clixexternalv1LiveActivityTarget1
  | Clixexternalv1LiveActivityTarget2;

export const clixexternalv1LiveActivityTarget3Schema: Schema<Clixexternalv1LiveActivityTarget3> =
  s.of<Clixexternalv1LiveActivityTarget3>(
    s.union([
      s.lazy(() => clixexternalv1LiveActivityTargetSchema),
      s.lazy(() => clixexternalv1LiveActivityTarget1Schema),
      s.lazy(() => clixexternalv1LiveActivityTarget2Schema),
    ]),
  );
