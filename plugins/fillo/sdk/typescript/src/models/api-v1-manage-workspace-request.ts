import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageWorkspaceRequest = {
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageWorkspaceRequestProperties: s.Shape<ApiV1ManageWorkspaceRequest> = {
  name: s.string(),
};

export const apiV1ManageWorkspaceRequestInternalSchema: Schema<ApiV1ManageWorkspaceRequest> =
  s.object<ApiV1ManageWorkspaceRequest>(apiV1ManageWorkspaceRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageWorkspaceRequestSchema: Schema<ApiV1ManageWorkspaceRequest> = s.lazySchema(() =>
  s.object<ApiV1ManageWorkspaceRequest>(
    {
      ...apiV1ManageWorkspaceRequestProperties,
      name: s.string().check(s.maxLength(80)),
    },
    { additionalProperties: s.json() },
  ),
);
