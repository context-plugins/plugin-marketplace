import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumConnectionsApiSchema, type DatumConnectionsApi } from "./datum-connections-api.js";
import { resourceLinkSchema, type ResourceLink } from "./resource-link.js";

/** Object containing details for connections. */
export type ConnectionsGetResponseResource = {
  /** Type, always "list". */
  type: string;
  data?: DatumConnectionsApi[];
  /** Link object containing a link to the resource, self reference. */
  links?: ResourceLink;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionsGetResponseResourceSchema: Schema<ConnectionsGetResponseResource> =
  s.object<ConnectionsGetResponseResource>(
    {
      type: s.string(),
      data: s.optional(s.array(s.lazy(() => datumConnectionsApiSchema))),
      links: s.optional(s.lazy(() => resourceLinkSchema)),
    },
    { additionalProperties: s.json() },
  );
