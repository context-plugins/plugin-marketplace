import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GroupBy = {
  Model: "model",
  Product: "product",
  ContextWindow: "context_window",
  InferenceGeo: "inference_geo",
  Speed: "speed",
  RbacGroupId: "rbac_group_id",
  SlackChannelId: "slack_channel_id",
  TeamsChannelId: "teams_channel_id",
  CostType: "cost_type",
  TokenType: "token_type",
} as const;
export type GroupBy = (typeof GroupBy)[keyof typeof GroupBy] | (string & {});

export const groupBySchema: EnumSchema<GroupBy> = s.enumOf<GroupBy>(GroupBy);
