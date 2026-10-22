import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionPackAuthStatusSchema, type ActionPackAuthStatus } from "./action-pack-auth-status.js";

export type ActionPackAuthStatusResponse = {
  actionPack: ActionPackAuthStatus;
};

export const actionPackAuthStatusResponseSchema: Schema<ActionPackAuthStatusResponse> =
  s.object<ActionPackAuthStatusResponse>({
    actionPack: actionPackAuthStatusSchema,
  });
