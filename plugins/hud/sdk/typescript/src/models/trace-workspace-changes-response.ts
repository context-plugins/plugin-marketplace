import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  eventHudPlatformStorageApiSchema,
  type EventHudPlatformStorageApi,
} from "./unions/event-hud-platform-storage-api.js";

export type TraceWorkspaceChangesResponse = {
  traceId: string;
  events: EventHudPlatformStorageApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceWorkspaceChangesResponseSchema: Schema<TraceWorkspaceChangesResponse> =
  s.object<TraceWorkspaceChangesResponse>(
    {
      traceId: s.string(),
      events: s.array(s.lazy(() => eventHudPlatformStorageApiSchema)),
      _keysMap: {
        traceId: "trace_id",
      },
    },
    { additionalProperties: s.json() },
  );
