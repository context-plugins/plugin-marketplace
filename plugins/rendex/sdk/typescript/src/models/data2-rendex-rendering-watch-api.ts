import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

export type Data2RendexRenderingWatchApi = {
  runId?: string;
  watchId?: string;
  status?: Status3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data2RendexRenderingWatchApiSchema: Schema<Data2RendexRenderingWatchApi> =
  s.object<Data2RendexRenderingWatchApi>(
    {
      runId: s.optional(s.string()),
      watchId: s.optional(s.string()),
      status: s.optional(s.lazy(() => status3Schema)),
    },
    { additionalProperties: s.json() },
  );
