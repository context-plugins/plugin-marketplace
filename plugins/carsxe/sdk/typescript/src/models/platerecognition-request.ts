import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlaterecognitionRequest = {
  /** URL to an image of a vehicle's license plate. */
  imageUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const platerecognitionRequestSchema: Schema<PlaterecognitionRequest> =
  s.object<PlaterecognitionRequest>(
    {
      imageUrl: s.string(),
      _keysMap: {
        imageUrl: "image_url",
      },
    },
    { additionalProperties: s.json() },
  );
