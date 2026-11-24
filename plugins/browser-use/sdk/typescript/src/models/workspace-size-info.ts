import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkspaceSizeInfo = {
  /** Current workspace storage usage in bytes. */
  usedBytes: number;
  /** Maximum workspace storage allowed in bytes. */
  maxBytes: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const workspaceSizeInfoProperties: s.Shape<WorkspaceSizeInfo> = {
  usedBytes: s.int(),
  maxBytes: s.int(),
};

export const workspaceSizeInfoInternalSchema: Schema<WorkspaceSizeInfo> = s.object<WorkspaceSizeInfo>(
  workspaceSizeInfoProperties,
  { additionalProperties: s.json() },
);

export const workspaceSizeInfoSchema: Schema<WorkspaceSizeInfo> = s.lazySchema(() =>
  s.object<WorkspaceSizeInfo>(
    {
      ...workspaceSizeInfoProperties,
      usedBytes: s.int().check(s.gte(0)),
      maxBytes: s.int().check(s.gt(0)),
    },
    { additionalProperties: s.json() },
  ),
);
