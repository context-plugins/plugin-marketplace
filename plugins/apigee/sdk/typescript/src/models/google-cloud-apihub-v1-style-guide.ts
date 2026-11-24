import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1StyleGuideContents1Schema,
  type GoogleCloudApihubV1StyleGuideContents1,
} from "./google-cloud-apihub-v1-style-guide-contents1.js";
import { linter1Schema, type Linter1 } from "./linter1.js";

/** Represents a singleton style guide resource to be used for linting Open API specs. */
export type GoogleCloudApihubV1StyleGuide = {
  /** Required. Input only. The contents of the uploaded style guide. */
  contents?: GoogleCloudApihubV1StyleGuideContents1;
  /**
   * Identifier. The name of the style guide. Format:
   * `projects/{project}/locations/{location}/plugins/{plugin}/styleGuide`
   */
  name?: string;
  /** Required. Target linter for the style guide. */
  linter?: Linter1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1StyleGuideSchema: Schema<GoogleCloudApihubV1StyleGuide> =
  s.object<GoogleCloudApihubV1StyleGuide>(
    {
      contents: s.optional(s.lazy(() => googleCloudApihubV1StyleGuideContents1Schema)),
      name: s.optional(s.string()),
      linter: s.optional(s.lazy(() => linter1Schema)),
    },
    { additionalProperties: s.json() },
  );
