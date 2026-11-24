import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The health status of the Objective. */
export const Status1ShortcutObjectivesApi = {
  AtRisk: "At Risk",
  OnTrack: "On Track",
  OffTrack: "Off Track",
  NoHealth: "No Health",
} as const;
export type Status1ShortcutObjectivesApi =
  | (typeof Status1ShortcutObjectivesApi)[keyof typeof Status1ShortcutObjectivesApi]
  | (string & {});

export const status1ShortcutObjectivesApiSchema: EnumSchema<Status1ShortcutObjectivesApi> =
  s.enumOf<Status1ShortcutObjectivesApi>(Status1ShortcutObjectivesApi);
