import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information about the group observer. */
export type GroupInfo = {
  /** Group ID. */
  id: string;
  /** Group name. */
  name: string;
  /** Group version identifier. */
  versionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupInfoSchema: Schema<GroupInfo> = s.object<GroupInfo>(
  {
    id: s.string(),
    name: s.string(),
    versionId: s.optional(s.string()),
    _keysMap: {
      versionId: "version_id",
    },
  },
  { additionalProperties: s.json() },
);
