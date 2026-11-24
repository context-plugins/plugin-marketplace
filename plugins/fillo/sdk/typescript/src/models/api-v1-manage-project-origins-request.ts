import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageProjectOriginsRequest = {
  origins: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageProjectOriginsRequestSchema: Schema<ApiV1ManageProjectOriginsRequest> =
  s.object<ApiV1ManageProjectOriginsRequest>(
    {
      origins: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
