import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModeDeliverdDevTasksApi = {
  Allowed: "allowed",
  Approval: "approval",
  Denied: "denied",
} as const;
export type ModeDeliverdDevTasksApi =
  | (typeof ModeDeliverdDevTasksApi)[keyof typeof ModeDeliverdDevTasksApi]
  | (string & {});

export const modeDeliverdDevTasksApiSchema: EnumSchema<ModeDeliverdDevTasksApi> =
  s.enumOf<ModeDeliverdDevTasksApi>(ModeDeliverdDevTasksApi);
