import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutomationsRequest = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationsRequestSchema: Schema<AutomationsRequest> = s.object<AutomationsRequest>(
  {
    enabled: s.boolean(),
  },
  { additionalProperties: s.json() },
);
