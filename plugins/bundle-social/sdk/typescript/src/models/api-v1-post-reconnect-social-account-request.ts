import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type ApiV1PostReconnectSocialAccountRequest = {
  teamId: string;
  type: Type;
  postIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostReconnectSocialAccountRequestSchema: Schema<ApiV1PostReconnectSocialAccountRequest> =
  s.object<ApiV1PostReconnectSocialAccountRequest>(
    {
      teamId: s.string(),
      type: typeSchema,
      postIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
