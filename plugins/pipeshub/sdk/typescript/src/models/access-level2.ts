import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Computed per request. The requester's effective access level: their entry in `sharedWith`, or
 * `read` by default.
 */
export const AccessLevel2 = {
  Read: "read",
  Write: "write",
} as const;
export type AccessLevel2 = (typeof AccessLevel2)[keyof typeof AccessLevel2] | (string & {});

export const accessLevel2Schema: EnumSchema<AccessLevel2> = s.enumOf<AccessLevel2>(AccessLevel2);
