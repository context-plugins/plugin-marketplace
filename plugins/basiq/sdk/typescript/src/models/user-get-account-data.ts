import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceLinkSchema, type ResourceLink } from "./resource-link.js";

/** Object containing account data. */
export type UserGetAccountData = {
  /** Always "account". */
  type: string;
  /** Account identification. */
  id: string;
  /** Link object containing a link to the resource, self reference. */
  links: ResourceLink;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userGetAccountDataSchema: Schema<UserGetAccountData> = s.object<UserGetAccountData>(
  {
    type: s.string(),
    id: s.string(),
    links: resourceLinkSchema,
  },
  { additionalProperties: s.json() },
);
