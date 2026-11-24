import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutomateRecycleKeyJsonResponse = {
  oldKey?: string;
  newKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automateRecycleKeyJsonResponseSchema: Schema<AutomateRecycleKeyJsonResponse> =
  s.object<AutomateRecycleKeyJsonResponse>(
    {
      oldKey: s.optional(s.string()),
      newKey: s.optional(s.string()),
      _keysMap: {
        oldKey: "old_key",
        newKey: "new_key",
      },
    },
    { additionalProperties: s.json() },
  );
