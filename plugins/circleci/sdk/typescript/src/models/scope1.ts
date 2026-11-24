import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Scope1 = {
  /** The scope ID (project ID) */
  id: string;
  /** The scope type @default "project" */
  type?: "project";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scope1Schema: Schema<Scope1> = s.object<Scope1>(
  {
    id: s.string(),
    type: s.defaulted(s.literal("project"), "project"),
  },
  { additionalProperties: s.json() },
);
