import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";

export type Workspace = {
  id: number;
  name: string;
  access: Access;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceSchema: Schema<Workspace> = s.object<Workspace>(
  {
    id: s.int(),
    name: s.string(),
    access: accessSchema,
  },
  { additionalProperties: s.json() },
);
