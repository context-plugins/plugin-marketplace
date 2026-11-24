import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the experience. */
export const StatusContentstackPersonalizeManagementExperiencesApi = {
  Draft: "DRAFT",
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Ended: "ENDED",
} as const;
export type StatusContentstackPersonalizeManagementExperiencesApi =
  | (typeof StatusContentstackPersonalizeManagementExperiencesApi)[keyof typeof StatusContentstackPersonalizeManagementExperiencesApi]
  | (string & {});

export const statusContentstackPersonalizeManagementExperiencesApiSchema: EnumSchema<StatusContentstackPersonalizeManagementExperiencesApi> =
  s.enumOf<StatusContentstackPersonalizeManagementExperiencesApi>(
    StatusContentstackPersonalizeManagementExperiencesApi,
  );
