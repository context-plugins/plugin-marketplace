import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutomateBuildsJsonRequest = {
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automateBuildsJsonRequestSchema: Schema<AutomateBuildsJsonRequest> =
  s.object<AutomateBuildsJsonRequest>(
    {
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
