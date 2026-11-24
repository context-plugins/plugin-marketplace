import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  googleNewsMonitorRequestInternalSchema,
  googleNewsMonitorRequestSchema,
  type GoogleNewsMonitorRequest,
} from "../google-news-monitor-request.js";
import {
  googleNewsMonitorRequest1InternalSchema,
  googleNewsMonitorRequest1Schema,
  type GoogleNewsMonitorRequest1,
} from "../google-news-monitor-request1.js";

export type GoogleNewsMonitorRequest2 = GoogleNewsMonitorRequest | GoogleNewsMonitorRequest1;

export const googleNewsMonitorRequest2InternalSchema: Schema<GoogleNewsMonitorRequest2> =
  s.of<GoogleNewsMonitorRequest2>(
    s.union([
      s.lazy(() => googleNewsMonitorRequestInternalSchema),
      s.lazy(() => googleNewsMonitorRequest1InternalSchema),
    ]),
  );

export const googleNewsMonitorRequest2Schema: Schema<GoogleNewsMonitorRequest2> = s.lazySchema(() =>
  s.of<GoogleNewsMonitorRequest2>(
    s.union([s.lazy(() => googleNewsMonitorRequestSchema), s.lazy(() => googleNewsMonitorRequest1Schema)]),
  ),
);
