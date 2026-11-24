import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Resource = {
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceSchema: Schema<Resource> = s.object<Resource>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
