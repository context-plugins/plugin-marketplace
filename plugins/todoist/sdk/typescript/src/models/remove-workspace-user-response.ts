import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Status, statusSchema } from "./status.js";

export type RemoveWorkspaceUserResponse = {
  /** Always `ok` on success. @default Status.Ok */
  status?: Status;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const removeWorkspaceUserResponseSchema: Schema<RemoveWorkspaceUserResponse> =
  s.object<RemoveWorkspaceUserResponse>(
    {
      status: s.defaulted(statusSchema, Status.Ok),
    },
    { additionalProperties: s.json() },
  );
