import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body7 = {
  /** Name of the new section. */
  name: string;
  /** ID of the project to add the section to */
  projectId: string;
  /** Position of the new section in the project */
  order?: number | null;
  /** Description of the new section. */
  description?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body7Schema: Schema<Body7> = s.object<Body7>(
  {
    name: s.string(),
    projectId: s.string(),
    order: s.optionalNullable(s.int()),
    description: s.optionalNullable(s.string()),
    _keysMap: {
      projectId: "project_id",
    },
  },
  { additionalProperties: s.json() },
);
