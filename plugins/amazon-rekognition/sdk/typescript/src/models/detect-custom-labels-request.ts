import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { imageSchema, type Image } from "./image.js";

export type DetectCustomLabelsRequest = {
  /**
   * The ARN of the model version that you want to use. Only models associated with Custom Labels
   * projects accepted by the operation. If a provided ARN refers to a model version associated with
   * a project for a different feature type, then an InvalidParameterException is returned.
   */
  projectVersionArn: string;
  image: Image;
  /**
   * Maximum number of results you want the service to return in the response. The service returns
   * the specified number of highest confidence labels ranked from highest confidence to lowest.
   */
  maxResults?: number;
  /**
   * Specifies the minimum confidence level for the labels to return. DetectCustomLabels doesn't
   * return any labels with a confidence value that's lower than this specified value. If you
   * specify a value of 0, DetectCustomLabels returns all labels, regardless of the assumed
   * threshold applied to each label. If you don't specify a value for MinConfidence,
   * DetectCustomLabels returns labels based on the assumed threshold of each label.
   */
  minConfidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectCustomLabelsRequestSchema: Schema<DetectCustomLabelsRequest> =
  s.object<DetectCustomLabelsRequest>(
    {
      projectVersionArn: s.string(),
      image: imageSchema,
      maxResults: s.optional(s.int()),
      minConfidence: s.optional(s.float64()),
      _keysMap: {
        projectVersionArn: "ProjectVersionArn",
        image: "Image",
        maxResults: "MaxResults",
        minConfidence: "MinConfidence",
      },
    },
    { additionalProperties: s.json() },
  );
