import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  googleMonitorRequest3ModelInternalSchema,
  googleMonitorRequest3ModelSchema,
  type GoogleMonitorRequest3Model,
} from "../google-monitor-request3-model.js";
import {
  googleMonitorRequest31InternalSchema,
  googleMonitorRequest31Schema,
  type GoogleMonitorRequest31,
} from "../google-monitor-request31.js";
import {
  googleMonitorRequest32InternalSchema,
  googleMonitorRequest32Schema,
  type GoogleMonitorRequest32,
} from "../google-monitor-request32.js";

export type GoogleMonitorRequest21 =
  | GoogleMonitorRequest3Model
  | GoogleMonitorRequest31
  | GoogleMonitorRequest32;

export const googleMonitorRequest21InternalSchema: Schema<GoogleMonitorRequest21> =
  s.of<GoogleMonitorRequest21>(
    s.union([
      s.lazy(() => googleMonitorRequest3ModelInternalSchema),
      s.lazy(() => googleMonitorRequest31InternalSchema),
      s.lazy(() => googleMonitorRequest32InternalSchema),
    ]),
  );

export const googleMonitorRequest21Schema: Schema<GoogleMonitorRequest21> = s.lazySchema(() =>
  s.of<GoogleMonitorRequest21>(
    s.union([
      s.lazy(() => googleMonitorRequest3ModelSchema),
      s.lazy(() => googleMonitorRequest31Schema),
      s.lazy(() => googleMonitorRequest32Schema),
    ]),
  ),
);
