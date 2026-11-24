import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { incomingCdrInternalSchema, incomingCdrSchema, type IncomingCdr } from "../incoming-cdr.js";
import { sipCdrInternalSchema, sipCdrSchema, type SipCdr } from "../sip-cdr.js";
import { webCdrInternalSchema, webCdrSchema, type WebCdr } from "../web-cdr.js";

export type Call = SipCdr | IncomingCdr | WebCdr;

export const callInternalSchema: Schema<Call> = s.of<Call>(
  s.union([
    s.lazy(() => sipCdrInternalSchema),
    s.lazy(() => incomingCdrInternalSchema),
    s.lazy(() => webCdrInternalSchema),
  ]),
);

export const callSchema: Schema<Call> = s.lazySchema(() =>
  s.of<Call>(
    s.union([s.lazy(() => sipCdrSchema), s.lazy(() => incomingCdrSchema), s.lazy(() => webCdrSchema)]),
  ),
);
