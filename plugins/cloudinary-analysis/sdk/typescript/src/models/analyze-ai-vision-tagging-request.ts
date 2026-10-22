import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tagDefinitionSchema, type TagDefinition } from "./tag-definition.js";
import { source2Schema, type Source2 } from "./unions/source2.js";

export type AnalyzeAiVisionTaggingRequest = {
  source: Source2;
  /**
   * Whether to perform the analysis asynchronously. If true, the response is returned immediately
   * and analysis is done in the background. Once complete, a webhook notification will be sent to
   * the specified URL and/or to the URLs defined in the Webhook Notifications settings of your
   * Cloudinary Console.
   */
  async?: boolean;
  /**
   * The webhook URL to notify when the analysis is complete. Only relevant when async is set to
   * true.
   */
  notificationUrl?: string;
  tagDefinitions: TagDefinition[];
};

export const analyzeAiVisionTaggingRequestSchema: Schema<AnalyzeAiVisionTaggingRequest> =
  s.object<AnalyzeAiVisionTaggingRequest>({
    source: source2Schema,
    async: s.optional(s.boolean()),
    notificationUrl: s.optional(s.string()),
    tagDefinitions: s.array(s.lazy(() => tagDefinitionSchema)),
    _keysMap: {
      notificationUrl: "notification_url",
      tagDefinitions: "tag_definitions",
    },
  });
