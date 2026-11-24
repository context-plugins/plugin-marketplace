import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsResponsesReleaseResponse = {
  released: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsResponsesReleaseResponseSchema: Schema<ApiV1ManageFormsResponsesReleaseResponse> =
  s.object<ApiV1ManageFormsResponsesReleaseResponse>(
    {
      released: s.int(),
    },
    { additionalProperties: s.json() },
  );
