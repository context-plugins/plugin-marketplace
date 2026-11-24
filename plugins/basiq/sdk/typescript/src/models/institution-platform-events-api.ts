import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksPlatformEventsApiSchema, type LinksPlatformEventsApi } from "./links-platform-events-api.js";

export type InstitutionPlatformEventsApi = {
  id?: string;
  links?: LinksPlatformEventsApi;
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const institutionPlatformEventsApiSchema: Schema<InstitutionPlatformEventsApi> =
  s.object<InstitutionPlatformEventsApi>(
    {
      id: s.optional(s.string()),
      links: s.optional(s.lazy(() => linksPlatformEventsApiSchema)),
      type: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
