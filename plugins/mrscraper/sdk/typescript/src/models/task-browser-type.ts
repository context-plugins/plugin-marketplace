import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaskBrowserType = {
  Chrome: "CHROME",
  Firefox: "FIREFOX",
  Safari: "SAFARI",
} as const;
export type TaskBrowserType = (typeof TaskBrowserType)[keyof typeof TaskBrowserType] | (string & {});

export const taskBrowserTypeSchema: EnumSchema<TaskBrowserType> = s.enumOf<TaskBrowserType>(TaskBrowserType);
