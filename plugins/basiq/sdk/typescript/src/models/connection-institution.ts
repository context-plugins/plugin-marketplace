import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceLinkSchema, type ResourceLink } from "./resource-link.js";

/** Institution details. */
export type ConnectionInstitution = {
  /** Institution id */
  id: string;
  /** Link object containing a link to the resource, self reference. */
  links: ResourceLink;
  /** Always "institution". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionInstitutionSchema: Schema<ConnectionInstitution> = s.object<ConnectionInstitution>(
  {
    id: s.string(),
    links: resourceLinkSchema,
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
