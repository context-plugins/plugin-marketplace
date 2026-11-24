import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Recipe status, derived from its results and whether it is dismissed. Absent when unavailable. */
export const StatusDoiTComposerInsightsBetaApi = {
  Active: "active",
  Resolved: "resolved",
  Dismissed: "dismissed",
} as const;
export type StatusDoiTComposerInsightsBetaApi =
  | (typeof StatusDoiTComposerInsightsBetaApi)[keyof typeof StatusDoiTComposerInsightsBetaApi]
  | (string & {});

export const statusDoiTComposerInsightsBetaApiSchema: EnumSchema<StatusDoiTComposerInsightsBetaApi> =
  s.enumOf<StatusDoiTComposerInsightsBetaApi>(StatusDoiTComposerInsightsBetaApi);
