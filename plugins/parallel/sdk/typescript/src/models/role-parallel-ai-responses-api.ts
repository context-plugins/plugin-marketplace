import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The role of the message author. */
export const RoleParallelAiResponsesApi = {
  User: "user",
  Assistant: "assistant",
  System: "system",
  Developer: "developer",
} as const;
export type RoleParallelAiResponsesApi =
  | (typeof RoleParallelAiResponsesApi)[keyof typeof RoleParallelAiResponsesApi]
  | (string & {});

export const roleParallelAiResponsesApiSchema: EnumSchema<RoleParallelAiResponsesApi> =
  s.enumOf<RoleParallelAiResponsesApi>(RoleParallelAiResponsesApi);
