import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { audioContentSchema, type AudioContent } from "../audio-content.js";
import { imageContentSchema, type ImageContent } from "../image-content.js";
import { textContentSchema, type TextContent } from "../text-content.js";
import { videoContentSchema, type VideoContent } from "../video-content.js";

export type UserMessageContentMultiModal =
  | (AudioContent & { type: "audio_url" })
  | (ImageContent & { type: "image_url" })
  | (TextContent & { type: "text" })
  | (VideoContent & { type: "video_url" });

export const userMessageContentMultiModalSchema: Schema<UserMessageContentMultiModal> =
  s.discriminatedUnion<UserMessageContentMultiModal>("type", {
    audio_url: audioContentSchema,
    image_url: imageContentSchema,
    text: textContentSchema,
    video_url: videoContentSchema,
  });
