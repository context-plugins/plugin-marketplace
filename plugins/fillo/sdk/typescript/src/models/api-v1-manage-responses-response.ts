import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageResponsesResponse = {
  id: string;
  deleted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageResponsesResponseSchema: Schema<ApiV1ManageResponsesResponse> =
  s.object<ApiV1ManageResponsesResponse>(
    {
      id: s.string(),
      deleted: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
