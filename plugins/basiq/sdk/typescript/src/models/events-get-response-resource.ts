import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumPlatformEventsApiSchema, type DatumPlatformEventsApi } from "./datum-platform-events-api.js";
import { resourceLinkSchema, type ResourceLink } from "./resource-link.js";

/** Object containing details for connections. */
export type EventsGetResponseResource = {
  /** Type, always "list". */
  type: string;
  data?: DatumPlatformEventsApi[];
  /** Link object containing a link to the resource, self reference. */
  links?: ResourceLink;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsGetResponseResourceSchema: Schema<EventsGetResponseResource> =
  s.object<EventsGetResponseResource>(
    {
      type: s.string(),
      data: s.optional(s.array(s.lazy(() => datumPlatformEventsApiSchema))),
      links: s.optional(s.lazy(() => resourceLinkSchema)),
    },
    { additionalProperties: s.json() },
  );
