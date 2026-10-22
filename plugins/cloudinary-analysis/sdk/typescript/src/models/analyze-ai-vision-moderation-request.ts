import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { source2Schema, type Source2 } from "./unions/source2.js";

export type AnalyzeAiVisionModerationRequest = {
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
  /** A list of yes/no questions */
  rejectionQuestions?: string[];
};

export const analyzeAiVisionModerationRequestSchema: Schema<AnalyzeAiVisionModerationRequest> =
  s.object<AnalyzeAiVisionModerationRequest>({
    source: source2Schema,
    async: s.optional(s.boolean()),
    notificationUrl: s.optional(s.string()),
    rejectionQuestions: s.optional(s.array(s.string())),
    _keysMap: {
      notificationUrl: "notification_url",
      rejectionQuestions: "rejection_questions",
    },
  });
