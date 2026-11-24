import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksPlatformEventsApiSchema, type LinksPlatformEventsApi } from "./links-platform-events-api.js";

export type ReportsResponse = {
  type?: string;
  id?: string;
  links?: LinksPlatformEventsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportsResponseSchema: Schema<ReportsResponse> = s.object<ReportsResponse>(
  {
    type: s.optional(s.string()),
    id: s.optional(s.string()),
    links: s.optional(s.lazy(() => linksPlatformEventsApiSchema)),
  },
  { additionalProperties: s.json() },
);
