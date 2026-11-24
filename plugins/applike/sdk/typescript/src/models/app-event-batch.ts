import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appInternalSchema, appSchema, type App } from "./app.js";
import { appEvent2InternalSchema, appEvent2Schema, type AppEvent2 } from "./unions/app-event2.js";
import { user4InternalSchema, user4Schema, type User4 } from "./unions/user4.js";

/**
 * A batch of AppEvents, all for one app user combination. If one event is invalid, the whole batch
 * is rejected.
 */
export type AppEventBatch = {
  /** 36 character uuid of the batch */
  batchId: string;
  app: App;
  user: User4;
  events: AppEvent2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const appEventBatchProperties: s.Shape<AppEventBatch> = {
  batchId: s.string(),
  app: appInternalSchema,
  user: user4InternalSchema,
  events: s.array(s.lazy(() => appEvent2InternalSchema)),
};

export const appEventBatchInternalSchema: Schema<AppEventBatch> = s.object<AppEventBatch>(
  appEventBatchProperties,
  { additionalProperties: s.json() },
);

export const appEventBatchSchema: Schema<AppEventBatch> = s.lazySchema(() =>
  s.object<AppEventBatch>(
    {
      ...appEventBatchProperties,
      app: appSchema,
      user: user4Schema,
      events: s.array(s.lazy(() => appEvent2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
