import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddMembersResponse = {
  added: number;
  skipped: number;
  skippedIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addMembersResponseSchema: Schema<AddMembersResponse> = s.object<AddMembersResponse>(
  {
    added: s.int(),
    skipped: s.int(),
    skippedIds: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
