import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body35 = {
  /** Name of the new folder. */
  name: string;
  /** ID of the workspace to create the folder in. */
  workspaceId: number;
  /** Default position of the folder in the workspace. */
  defaultOrder?: number | null;
  /** User-specific position of the folder. */
  childOrder?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body35Schema: Schema<Body35> = s.object<Body35>(
  {
    name: s.string(),
    workspaceId: s.int(),
    defaultOrder: s.optionalNullable(s.int()),
    childOrder: s.optionalNullable(s.int()),
    _keysMap: {
      workspaceId: "workspace_id",
      defaultOrder: "default_order",
      childOrder: "child_order",
    },
  },
  { additionalProperties: s.json() },
);
