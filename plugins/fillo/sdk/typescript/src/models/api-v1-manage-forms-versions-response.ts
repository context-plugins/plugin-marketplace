import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formVersionSchema, type FormVersion } from "./form-version.js";

export type ApiV1ManageFormsVersionsResponse = {
  data: FormVersion[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsVersionsResponseSchema: Schema<ApiV1ManageFormsVersionsResponse> =
  s.object<ApiV1ManageFormsVersionsResponse>(
    {
      data: s.array(s.lazy(() => formVersionSchema)),
    },
    { additionalProperties: s.json() },
  );
