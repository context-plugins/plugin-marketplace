import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lifeCycleEventSchema, type LifeCycleEvent } from "./life-cycle-event.js";

/** Describes the response body of the /debug/{datasource}/document/events API call */
export type DebugDocumentLifecycleResponse = {
  /** List of lifecycle events corresponding to the document */
  lifeCycleEvents?: LifeCycleEvent[];
};

export const debugDocumentLifecycleResponseSchema: Schema<DebugDocumentLifecycleResponse> =
  s.object<DebugDocumentLifecycleResponse>({
    lifeCycleEvents: s.optional(s.array(s.lazy(() => lifeCycleEventSchema))),
  });
