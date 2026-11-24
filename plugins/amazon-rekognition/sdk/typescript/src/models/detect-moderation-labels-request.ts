import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { humanLoopConfigSchema, type HumanLoopConfig } from "./human-loop-config.js";
import { imageSchema, type Image } from "./image.js";

export type DetectModerationLabelsRequest = {
  image: Image;
  /**
   * Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't
   * return any labels with a confidence level lower than this specified value. If you don't specify
   * MinConfidence, the operation returns labels with confidence values greater than or equal to 50
   * percent.
   */
  minConfidence?: number;
  humanLoopConfig?: HumanLoopConfig;
  /**
   * Identifier for the custom adapter. Expects the ProjectVersionArn as a value. Use the
   * CreateProject or CreateProjectVersion APIs to create a custom adapter.
   */
  projectVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectModerationLabelsRequestSchema: Schema<DetectModerationLabelsRequest> =
  s.object<DetectModerationLabelsRequest>(
    {
      image: imageSchema,
      minConfidence: s.optional(s.float64()),
      humanLoopConfig: s.optional(s.lazy(() => humanLoopConfigSchema)),
      projectVersion: s.optional(s.string()),
      _keysMap: {
        image: "Image",
        minConfidence: "MinConfidence",
        humanLoopConfig: "HumanLoopConfig",
        projectVersion: "ProjectVersion",
      },
    },
    { additionalProperties: s.json() },
  );
