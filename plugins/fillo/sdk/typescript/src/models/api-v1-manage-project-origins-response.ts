import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageProjectOriginsResponse = {
  origins: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageProjectOriginsResponseSchema: Schema<ApiV1ManageProjectOriginsResponse> =
  s.object<ApiV1ManageProjectOriginsResponse>(
    {
      origins: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
