import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { callActionSchema, type CallAction } from "../call-action.js";
import { incrementActionSchema, type IncrementAction } from "../increment-action.js";
import { sayActionSchema, type SayAction } from "../say-action.js";
import { setValueActionSchema, type SetValueAction } from "../set-value-action.js";

export type Start1 =
  | (CallAction & { action: "call" })
  | (IncrementAction & { action: "inc" })
  | (SayAction & { action: "say" })
  | (SetValueAction & { action: "set" });

export const start1Schema: Schema<Start1> = s.discriminatedUnion<Start1>("action", {
  call: callActionSchema,
  inc: incrementActionSchema,
  say: sayActionSchema,
  set: setValueActionSchema,
});
