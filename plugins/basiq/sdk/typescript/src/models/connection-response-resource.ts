import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceLinkSchema, type ResourceLink } from "./resource-link.js";

/** Object containing details for connection post. */
export type ConnectionResponseResource = {
  /** Type, always "job". */
  type: string;
  /** Job identification. */
  id: string;
  /** Link object containing a link to the resource, self reference. */
  links: ResourceLink;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionResponseResourceSchema: Schema<ConnectionResponseResource> =
  s.object<ConnectionResponseResource>(
    {
      type: s.string(),
      id: s.string(),
      links: resourceLinkSchema,
    },
    { additionalProperties: s.json() },
  );
