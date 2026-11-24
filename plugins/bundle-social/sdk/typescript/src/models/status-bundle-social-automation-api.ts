import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBundleSocialAutomationApi = {
  Draft: "DRAFT",
  Active: "ACTIVE",
  Paused: "PAUSED",
  Archived: "ARCHIVED",
} as const;
export type StatusBundleSocialAutomationApi =
  | (typeof StatusBundleSocialAutomationApi)[keyof typeof StatusBundleSocialAutomationApi]
  | (string & {});

export const statusBundleSocialAutomationApiSchema: EnumSchema<StatusBundleSocialAutomationApi> =
  s.enumOf<StatusBundleSocialAutomationApi>(StatusBundleSocialAutomationApi);
