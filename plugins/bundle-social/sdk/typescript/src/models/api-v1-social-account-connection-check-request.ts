import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type ApiV1SocialAccountConnectionCheckRequest = {
  type: Type;
  teamId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountConnectionCheckRequestSchema: Schema<ApiV1SocialAccountConnectionCheckRequest> =
  s.object<ApiV1SocialAccountConnectionCheckRequest>(
    {
      type: typeSchema,
      teamId: s.string(),
    },
    { additionalProperties: s.json() },
  );
