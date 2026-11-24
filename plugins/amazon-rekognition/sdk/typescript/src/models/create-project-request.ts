import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { autoUpdateSchema, type AutoUpdate } from "./auto-update.js";
import {
  featureAmazonRekognitionProjectApiSchema,
  type FeatureAmazonRekognitionProjectApi,
} from "./feature-amazon-rekognition-project-api.js";

export type CreateProjectRequest = {
  /** The name of the project to create. */
  projectName: string;
  /**
   * Specifies feature that is being customized. If no value is provided CUSTOM_LABELS is used as a
   * default.
   */
  feature?: FeatureAmazonRekognitionProjectApi;
  /**
   * Specifies whether automatic retraining should be attempted for the versions of the project.
   * Automatic retraining is done as a best effort. Required argument for Content Moderation.
   * Applicable only to adapters.
   */
  autoUpdate?: AutoUpdate;
  /** A set of tags (key-value pairs) that you want to attach to the project. */
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createProjectRequestSchema: Schema<CreateProjectRequest> = s.object<CreateProjectRequest>(
  {
    projectName: s.string(),
    feature: s.optional(s.lazy(() => featureAmazonRekognitionProjectApiSchema)),
    autoUpdate: s.optional(s.lazy(() => autoUpdateSchema)),
    tags: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      projectName: "ProjectName",
      feature: "Feature",
      autoUpdate: "AutoUpdate",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
