import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `pending` (waiting for the owner to approve OAuth), `active`, `reauth_required` (the platform
 * rejected the stored token or key) or `disconnected`.
 */
export const Status = {
  Pending: "pending",
  Active: "active",
  ReauthRequired: "reauth_required",
  Disconnected: "disconnected",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
