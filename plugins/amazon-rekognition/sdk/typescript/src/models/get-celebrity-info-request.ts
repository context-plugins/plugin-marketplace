import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetCelebrityInfoRequest = {
  /**
   * The ID for the celebrity. You get the celebrity ID from a call to the RecognizeCelebrities
   * operation, which recognizes celebrities in an image.
   */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getCelebrityInfoRequestSchema: Schema<GetCelebrityInfoRequest> =
  s.object<GetCelebrityInfoRequest>(
    {
      id: s.string(),
      _keysMap: {
        id: "Id",
      },
    },
    { additionalProperties: s.json() },
  );
