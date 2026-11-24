import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountResponseResourceSchema, type AccountResponseResource } from "./account-response-resource.js";
import { resourceAccountLinkSchema, type ResourceAccountLink } from "./resource-account-link.js";

export type UsersAccountsResponse = {
  /** Type of the response, always "list". */
  type: string;
  /** Container object, containing account details. */
  data: AccountResponseResource[];
  /** Link object containing a link to the resource, self reference. */
  links: ResourceAccountLink;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersAccountsResponseSchema: Schema<UsersAccountsResponse> = s.object<UsersAccountsResponse>(
  {
    type: s.string(),
    data: s.array(s.lazy(() => accountResponseResourceSchema)),
    links: resourceAccountLinkSchema,
  },
  { additionalProperties: s.json() },
);
