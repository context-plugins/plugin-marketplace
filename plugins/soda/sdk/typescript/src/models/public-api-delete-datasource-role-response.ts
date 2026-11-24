import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDeleteDatasourceRoleResponse = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDeleteDatasourceRoleResponseSchema: Schema<PublicApiDeleteDatasourceRoleResponse> =
  s.object<PublicApiDeleteDatasourceRoleResponse>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
