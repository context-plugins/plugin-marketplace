import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceLinkSchema, type ResourceLink } from "./resource-link.js";

/** Object containing details for the statement upload process */
export type UsersStatementsResponse = {
  /** The type of resource, always "job". */
  type: string;
  /** The unique identifier of the job. */
  id: string;
  /** Link object containing a link to the resource, self reference. */
  links: ResourceLink;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersStatementsResponseSchema: Schema<UsersStatementsResponse> =
  s.object<UsersStatementsResponse>(
    {
      type: s.string(),
      id: s.string(),
      links: resourceLinkSchema,
    },
    { additionalProperties: s.json() },
  );
