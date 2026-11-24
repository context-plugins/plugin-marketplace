import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customLabelSchema, type CustomLabel } from "./custom-label.js";

export type DetectCustomLabelsResponse = {
  /** An array of custom labels detected in the input image. */
  customLabels?: CustomLabel[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectCustomLabelsResponseSchema: Schema<DetectCustomLabelsResponse> =
  s.object<DetectCustomLabelsResponse>(
    {
      customLabels: s.optional(s.array(s.lazy(() => customLabelSchema))),
      _keysMap: {
        customLabels: "CustomLabels",
      },
    },
    { additionalProperties: s.json() },
  );
