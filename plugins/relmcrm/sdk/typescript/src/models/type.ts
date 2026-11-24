import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type = {
  SendEmail: "send_email",
  SendMessage: "send_message",
  CreateActivity: "create_activity",
  MoveDealStage: "move_deal_stage",
  SetField: "set_field",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
