import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OutcomeHudPlatformTasksApi = {
  Created: "created",
  Updated: "updated",
  Unchanged: "unchanged",
} as const;
export type OutcomeHudPlatformTasksApi =
  | (typeof OutcomeHudPlatformTasksApi)[keyof typeof OutcomeHudPlatformTasksApi]
  | (string & {});

export const outcomeHudPlatformTasksApiSchema: EnumSchema<OutcomeHudPlatformTasksApi> =
  s.enumOf<OutcomeHudPlatformTasksApi>(OutcomeHudPlatformTasksApi);
