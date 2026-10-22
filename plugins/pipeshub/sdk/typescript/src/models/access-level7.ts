import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Computed per request from `sharedWith`; defaults to `read` when no explicit share grant is
 * attached to the serialized row.
 */
export const AccessLevel7 = {
  Read: "read",
  Write: "write",
} as const;
export type AccessLevel7 = (typeof AccessLevel7)[keyof typeof AccessLevel7] | (string & {});

export const accessLevel7Schema: EnumSchema<AccessLevel7> = s.enumOf<AccessLevel7>(AccessLevel7);
