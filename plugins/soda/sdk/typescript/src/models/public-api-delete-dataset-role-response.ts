import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDeleteDatasetRoleResponse = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDeleteDatasetRoleResponseSchema: Schema<PublicApiDeleteDatasetRoleResponse> =
  s.object<PublicApiDeleteDatasetRoleResponse>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
