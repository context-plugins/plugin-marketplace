import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  googleMonitorRequestInternalSchema,
  googleMonitorRequestSchema,
  type GoogleMonitorRequest,
} from "../google-monitor-request.js";
import {
  googleMonitorRequest1InternalSchema,
  googleMonitorRequest1Schema,
  type GoogleMonitorRequest1,
} from "../google-monitor-request1.js";
import {
  googleMonitorRequest2InternalSchema,
  googleMonitorRequest2Schema,
  type GoogleMonitorRequest2,
} from "../google-monitor-request2.js";

export type GoogleMonitorRequest3 = GoogleMonitorRequest | GoogleMonitorRequest1 | GoogleMonitorRequest2;

export const googleMonitorRequest3InternalSchema: Schema<GoogleMonitorRequest3> = s.of<GoogleMonitorRequest3>(
  s.union([
    s.lazy(() => googleMonitorRequestInternalSchema),
    s.lazy(() => googleMonitorRequest1InternalSchema),
    s.lazy(() => googleMonitorRequest2InternalSchema),
  ]),
);

export const googleMonitorRequest3Schema: Schema<GoogleMonitorRequest3> = s.lazySchema(() =>
  s.of<GoogleMonitorRequest3>(
    s.union([
      s.lazy(() => googleMonitorRequestSchema),
      s.lazy(() => googleMonitorRequest1Schema),
      s.lazy(() => googleMonitorRequest2Schema),
    ]),
  ),
);
