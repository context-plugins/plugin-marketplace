import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Project = {
  id: string;
  name: string;
  slug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSchema: Schema<Project> = s.object<Project>(
  {
    id: s.string(),
    name: s.string(),
    slug: s.string(),
  },
  { additionalProperties: s.json() },
);
