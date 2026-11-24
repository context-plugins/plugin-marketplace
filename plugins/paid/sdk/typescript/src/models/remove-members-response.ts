import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RemoveMembersResponse = {
  removed: number;
  skipped: number;
  skippedIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const removeMembersResponseSchema: Schema<RemoveMembersResponse> = s.object<RemoveMembersResponse>(
  {
    removed: s.int(),
    skipped: s.int(),
    skippedIds: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
