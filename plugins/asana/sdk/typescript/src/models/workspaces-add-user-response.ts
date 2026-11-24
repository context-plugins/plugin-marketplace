import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  userBaseResponseInternalSchema,
  userBaseResponseSchema,
  type UserBaseResponse,
} from "./user-base-response.js";

export type WorkspacesAddUserResponse = {
  data?: UserBaseResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const workspacesAddUserResponseProperties: s.Shape<WorkspacesAddUserResponse> = {
  data: s.optional(s.lazy(() => userBaseResponseInternalSchema)),
};

export const workspacesAddUserResponseInternalSchema: Schema<WorkspacesAddUserResponse> =
  s.object<WorkspacesAddUserResponse>(workspacesAddUserResponseProperties, {
    additionalProperties: s.json(),
  });

export const workspacesAddUserResponseSchema: Schema<WorkspacesAddUserResponse> = s.lazySchema(() =>
  s.object<WorkspacesAddUserResponse>(
    {
      ...workspacesAddUserResponseProperties,
      data: s.optional(s.lazy(() => userBaseResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
