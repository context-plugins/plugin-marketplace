import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Workspace information in API responses. */
export type WorkspaceInfo = {
  id: string;
  name: string;
  subdomain: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceInfoSchema: Schema<WorkspaceInfo> = s.object<WorkspaceInfo>(
  {
    id: s.string(),
    name: s.string(),
    subdomain: s.string(),
  },
  { additionalProperties: s.json() },
);
