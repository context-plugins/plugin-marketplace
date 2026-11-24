import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Platform metadata used by product listing endpoints. */
export type PlatformApi = {
  displayName?: string;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const platformApiSchema: Schema<PlatformApi> = s.object<PlatformApi>(
  {
    displayName: s.optional(s.string()),
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
