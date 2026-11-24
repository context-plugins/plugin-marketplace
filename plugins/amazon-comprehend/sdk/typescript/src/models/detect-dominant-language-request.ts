import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DetectDominantLanguageRequest = {
  /**
   * A UTF-8 text string. The string must contain at least 20 characters. The maximum string size is
   * 100 KB.
   */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectDominantLanguageRequestSchema: Schema<DetectDominantLanguageRequest> =
  s.object<DetectDominantLanguageRequest>(
    {
      text: s.string(),
      _keysMap: {
        text: "Text",
      },
    },
    { additionalProperties: s.json() },
  );
