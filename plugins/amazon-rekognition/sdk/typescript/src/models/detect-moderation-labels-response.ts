import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentTypeSchema, type ContentType } from "./content-type.js";
import {
  humanLoopActivationOutputSchema,
  type HumanLoopActivationOutput,
} from "./human-loop-activation-output.js";
import { moderationLabelSchema, type ModerationLabel } from "./moderation-label.js";

export type DetectModerationLabelsResponse = {
  /**
   * Array of detected Moderation labels. For video operations, this includes the time, in
   * milliseconds from the start of the video, they were detected.
   */
  moderationLabels?: ModerationLabel[];
  /**
   * Version number of the base moderation detection model that was used to detect unsafe content.
   */
  moderationModelVersion?: string;
  humanLoopActivationOutput?: HumanLoopActivationOutput;
  /**
   * Identifier of the custom adapter that was used during inference. If during inference the
   * adapter was EXPIRED, then the parameter will not be returned, indicating that a base moderation
   * detection project version was used.
   */
  projectVersion?: string;
  /**
   * A list of predicted results for the type of content an image contains. For example, the image
   * content might be from animation, sports, or a video game.
   */
  contentTypes?: ContentType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectModerationLabelsResponseSchema: Schema<DetectModerationLabelsResponse> =
  s.object<DetectModerationLabelsResponse>(
    {
      moderationLabels: s.optional(s.array(s.lazy(() => moderationLabelSchema))),
      moderationModelVersion: s.optional(s.string()),
      humanLoopActivationOutput: s.optional(s.lazy(() => humanLoopActivationOutputSchema)),
      projectVersion: s.optional(s.string()),
      contentTypes: s.optional(s.array(s.lazy(() => contentTypeSchema))),
      _keysMap: {
        moderationLabels: "ModerationLabels",
        moderationModelVersion: "ModerationModelVersion",
        humanLoopActivationOutput: "HumanLoopActivationOutput",
        projectVersion: "ProjectVersion",
        contentTypes: "ContentTypes",
      },
    },
    { additionalProperties: s.json() },
  );
