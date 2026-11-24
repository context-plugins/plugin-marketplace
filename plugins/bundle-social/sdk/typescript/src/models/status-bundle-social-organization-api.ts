import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBundleSocialOrganizationApi = {
  Trialing: "trialing",
  Active: "active",
  Canceled: "canceled",
  Incomplete: "incomplete",
  IncompleteExpired: "incomplete_expired",
  PastDue: "past_due",
  Unpaid: "unpaid",
  Paused: "paused",
} as const;
export type StatusBundleSocialOrganizationApi =
  | (typeof StatusBundleSocialOrganizationApi)[keyof typeof StatusBundleSocialOrganizationApi]
  | (string & {});

export const statusBundleSocialOrganizationApiSchema: EnumSchema<StatusBundleSocialOrganizationApi> =
  s.enumOf<StatusBundleSocialOrganizationApi>(StatusBundleSocialOrganizationApi);
