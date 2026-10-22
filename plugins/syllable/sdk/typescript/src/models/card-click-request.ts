import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionTypeSchema, type ActionType } from "./action-type.js";

export type CardClickRequest = {
  /** Human-readable identifier for the card action. */
  actionId: string;
  /** The type of action triggers, either "action", or "cta". */
  actionType: ActionType;
};

export const cardClickRequestSchema: Schema<CardClickRequest> = s.object<CardClickRequest>({
  actionId: s.string(),
  actionType: actionTypeSchema,
  _keysMap: {
    actionId: "action_id",
    actionType: "action_type",
  },
});
