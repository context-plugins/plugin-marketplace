import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The type of the action. */
export const ActionType = {
  ActionTypeUnspecified: "ACTION_TYPE_UNSPECIFIED",
  SyncMetadata: "SYNC_METADATA",
  SyncRuntimeData: "SYNC_RUNTIME_DATA",
} as const;
export type ActionType = (typeof ActionType)[keyof typeof ActionType] | (string & {});

export const actionTypeSchema: EnumSchema<ActionType> = s.enumOf<ActionType>(ActionType);
