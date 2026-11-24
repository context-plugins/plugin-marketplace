import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groupSchema, type Group } from "./group.js";

export type IdentityApiGroupResponse = {
  results?: Group[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identityApiGroupResponseSchema: Schema<IdentityApiGroupResponse> =
  s.object<IdentityApiGroupResponse>(
    {
      results: s.optional(s.array(s.lazy(() => groupSchema))),
    },
    { additionalProperties: s.json() },
  );
