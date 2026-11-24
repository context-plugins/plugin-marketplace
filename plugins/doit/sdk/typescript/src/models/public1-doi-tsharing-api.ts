import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of permissions granted to all users in the organization for this resource.
 *
 * Allocations (single and group) always have at least `viewer` public access, so it cannot be
 * cleared:
 * - If `public` is omitted, the stored value is kept.
 * - An empty string (`""`) is accepted for backward compatibility and is treated as `viewer`.
 * - An explicit `null` is rejected with `400 Bad Request`.
 *
 * For Reports, Budgets, and Alerts, an omitted or `null` value sets `public` to `null` (no public
 * access).
 */
export const Public1DoiTSharingApi = {
  Editor: "editor",
  Viewer: "viewer",
} as const;
export type Public1DoiTSharingApi =
  | (typeof Public1DoiTSharingApi)[keyof typeof Public1DoiTSharingApi]
  | (string & {});

export const public1DoiTSharingApiSchema: EnumSchema<Public1DoiTSharingApi> =
  s.enumOf<Public1DoiTSharingApi>(Public1DoiTSharingApi);
