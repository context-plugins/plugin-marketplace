import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type ApiV1SocialAccountProfileRefreshRequest = {
  type: Type;
  teamId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountProfileRefreshRequestSchema: Schema<ApiV1SocialAccountProfileRefreshRequest> =
  s.object<ApiV1SocialAccountProfileRefreshRequest>(
    {
      type: typeSchema,
      teamId: s.string(),
    },
    { additionalProperties: s.json() },
  );
