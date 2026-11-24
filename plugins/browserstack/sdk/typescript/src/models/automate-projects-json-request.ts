import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutomateProjectsJsonRequest = {
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automateProjectsJsonRequestSchema: Schema<AutomateProjectsJsonRequest> =
  s.object<AutomateProjectsJsonRequest>(
    {
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
