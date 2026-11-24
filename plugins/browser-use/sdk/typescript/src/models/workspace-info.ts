import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./unions/name.js";

export type WorkspaceInfo = {
  id: string;
  name?: Name;
  archived: boolean;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceInfoSchema: Schema<WorkspaceInfo> = s.object<WorkspaceInfo>(
  {
    id: s.string(),
    name: s.optional(s.lazy(() => nameSchema)),
    archived: s.boolean(),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
