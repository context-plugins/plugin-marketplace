import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commissionSchema, type Commission } from "./commission.js";
import { links19Schema, type Links19 } from "./links19.js";

export type EntityClient = {
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
};

export const entityClientSchema: Schema<EntityClient> = s.object<EntityClient>({
  resource: s.string(),
  id: s.string(),
  commission: s.optionalNullable(s.lazy(() => commissionSchema)),
  organizationCreatedAt: s.optional(s.string()),
  links: links19Schema,
  _keysMap: {
    links: "_links",
  },
});
