import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { appEventInternalSchema, appEventSchema, type AppEvent } from "../app-event.js";
import { appEvent1InternalSchema, appEvent1Schema, type AppEvent1 } from "../app-event1.js";

export type AppEvent2 = AppEvent | AppEvent1;

export const appEvent2InternalSchema: Schema<AppEvent2> = s.of<AppEvent2>(
  s.union([s.lazy(() => appEventInternalSchema), s.lazy(() => appEvent1InternalSchema)]),
);

export const appEvent2Schema: Schema<AppEvent2> = s.lazySchema(() =>
  s.of<AppEvent2>(s.union([s.lazy(() => appEventSchema), s.lazy(() => appEvent1Schema)])),
);
