import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KindDeliverdDevTasksApi = {
  Objective: "objective",
  SideTask: "side_task",
  Investigation: "investigation",
  Research: "research",
  Debug: "debug",
  Decision: "decision",
} as const;
export type KindDeliverdDevTasksApi =
  | (typeof KindDeliverdDevTasksApi)[keyof typeof KindDeliverdDevTasksApi]
  | (string & {});

export const kindDeliverdDevTasksApiSchema: EnumSchema<KindDeliverdDevTasksApi> =
  s.enumOf<KindDeliverdDevTasksApi>(KindDeliverdDevTasksApi);
