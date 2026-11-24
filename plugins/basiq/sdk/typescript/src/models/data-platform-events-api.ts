import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  institutionPlatformEventsApiSchema,
  type InstitutionPlatformEventsApi,
} from "./institution-platform-events-api.js";
import { links1PlatformEventsApiSchema, type Links1PlatformEventsApi } from "./links1-platform-events-api.js";

export type DataPlatformEventsApi = {
  createdDate?: string;
  id?: string;
  institution?: InstitutionPlatformEventsApi;
  lastUsed?: string;
  links?: Links1PlatformEventsApi;
  mfaEnabled?: boolean;
  status?: string;
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataPlatformEventsApiSchema: Schema<DataPlatformEventsApi> = s.object<DataPlatformEventsApi>(
  {
    createdDate: s.optional(s.string()),
    id: s.optional(s.string()),
    institution: s.optional(s.lazy(() => institutionPlatformEventsApiSchema)),
    lastUsed: s.optional(s.string()),
    links: s.optional(s.lazy(() => links1PlatformEventsApiSchema)),
    mfaEnabled: s.optional(s.boolean()),
    status: s.optional(s.string()),
    type: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
