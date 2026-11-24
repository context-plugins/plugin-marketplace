import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { source2Schema, type Source2 } from "./source2.js";

export type Data1PlatformEventsApi = {
  type?: string;
  code?: string;
  title?: string;
  detail?: string;
  source?: Source2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1PlatformEventsApiSchema: Schema<Data1PlatformEventsApi> = s.object<Data1PlatformEventsApi>(
  {
    type: s.optional(s.string()),
    code: s.optional(s.string()),
    title: s.optional(s.string()),
    detail: s.optional(s.string()),
    source: s.optional(s.lazy(() => source2Schema)),
  },
  { additionalProperties: s.json() },
);
