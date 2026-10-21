import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commissionSchema, type Commission } from "./commission.js";
import { embedded13Schema, type Embedded13 } from "./embedded13.js";
import { links19Schema, type Links19 } from "./links19.js";

export type V2ClientsResponse1 = {
  /**
   * Indicates the response contains a client object. Will always contain the string `client` for
   * this resource type.
   */
  resource: string;
  /** The identifier uniquely referring to this client. Example: `org_12345678`. */
  id: string;
  /** The commission object. */
  commission?: Commission | null;
  /**
   * The date and time the client organization was created, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  organizationCreatedAt?: string;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links19;
  embedded?: Embedded13;
};

export const v2ClientsResponse1Schema: Schema<V2ClientsResponse1> = s.object<V2ClientsResponse1>({
  resource: s.string(),
  id: s.string(),
  commission: s.optionalNullable(s.lazy(() => commissionSchema)),
  organizationCreatedAt: s.optional(s.string()),
  links: links19Schema,
  embedded: s.optional(s.lazy(() => embedded13Schema)),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
