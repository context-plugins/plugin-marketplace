import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type Client = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** Client name */
  name: string;
  /** Client description */
  description?: string;
  /** The account ID the client is registered under */
  accountId: string;
  /** The client's unique ID */
  clientId: string;
  /** The client secret. This will only be shown upon creation. */
  clientSecret?: string;
  /** The client's redirect URI */
  redirectUri: string;
  creationDate: number;
};

export const clientSchema: Schema<Client> = s.object<Client>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  name: s.string(),
  description: s.optional(s.string()),
  accountId: s.string(),
  clientId: s.string(),
  clientSecret: s.optional(s.string()),
  redirectUri: s.string(),
  creationDate: s.int(),
  _keysMap: {
    links: "_links",
    accountId: "_accountId",
    clientId: "_clientId",
    clientSecret: "_clientSecret",
    creationDate: "_creationDate",
  },
});
