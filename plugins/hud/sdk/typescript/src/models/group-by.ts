import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GroupBy = {
  ApiKey: "api_key",
  Byok: "byok",
  Model: "model",
  User: "user",
  Route: "route",
} as const;
export type GroupBy = (typeof GroupBy)[keyof typeof GroupBy] | (string & {});

export const groupBySchema: EnumSchema<GroupBy> = s.enumOf<GroupBy>(GroupBy);
