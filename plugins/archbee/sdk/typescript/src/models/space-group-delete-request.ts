import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SpaceGroupDeleteRequest = {
  /** Space group id to delete. */
  spaceGroupId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spaceGroupDeleteRequestSchema: Schema<SpaceGroupDeleteRequest> =
  s.object<SpaceGroupDeleteRequest>(
    {
      spaceGroupId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
