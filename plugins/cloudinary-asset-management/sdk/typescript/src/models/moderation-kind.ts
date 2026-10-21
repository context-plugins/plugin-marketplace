import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModerationKind = {
  Manual: "manual",
  Webpurify: "webpurify",
  AwsRek: "aws_rek",
  AwsRekVideo: "aws_rek_video",
  PerceptionPoint: "perception_point",
  GoogleVideoModeration: "google_video_moderation",
  Duplicate: "duplicate",
} as const;
export type ModerationKind = (typeof ModerationKind)[keyof typeof ModerationKind] | (string & {});

export const moderationKindSchema: EnumSchema<ModerationKind> = s.enumOf<ModerationKind>(ModerationKind);
