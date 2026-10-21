import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SystemRestartResponse = {
  /** Restart operation initiated. @default "True" */
  restart?: "True";
};

export const systemRestartResponseSchema: Schema<SystemRestartResponse> = s.object<SystemRestartResponse>({
  restart: s.defaulted(s.literal("True"), "True"),
});
