import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { captureLevel1Schema, type CaptureLevel1 } from "./capture-level1.js";

export type CaptureParamsReq = {
  /** Amount of time to keep capture open, in seconds. If not provided, the default is 5 seconds. */
  duration?: number;
  /**
   * JavaScript expression evaluated against each event to determine whether an event is included in
   * the capture output. Expressions can reference any event field and use logical operators. If not
   * provided, all events are captured.
   */
  filter?: string;
  /** Stage at which events are captured. If not provided, the default is 0. */
  level?: CaptureLevel1;
  /** Maximum number of events to capture. If not provided, the default is 100. */
  maxEvents?: number;
  /**
   * How long to wait before increasing the capture sample size. Specify <code>1</code> second or
   * longer. If not provided, the default is 5 seconds.
   */
  stepDuration?: number;
  /** Unique ID of the Worker. */
  workerId?: string;
  /**
   * Maximum number of Workers that can capture initially. A value of <code>0</code> means unlimited
   * (all available Workers can capture). If not provided, the default is 50.
   */
  workerThreshold?: number;
};

export const captureParamsReqSchema: Schema<CaptureParamsReq> = s.object<CaptureParamsReq>({
  duration: s.optional(s.int()),
  filter: s.optional(s.string()),
  level: s.optional(s.lazy(() => captureLevel1Schema)),
  maxEvents: s.optional(s.int()),
  stepDuration: s.optional(s.int()),
  workerId: s.optional(s.string()),
  workerThreshold: s.optional(s.int()),
});
