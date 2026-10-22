import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { callActionSchema, type CallAction } from "../call-action.js";
import { getValueActionSchema, type GetValueAction } from "../get-value-action.js";
import { incrementActionSchema, type IncrementAction } from "../increment-action.js";
import { sayActionSchema, type SayAction } from "../say-action.js";
import { setValueActionSchema, type SetValueAction } from "../set-value-action.js";

export type Enter1 =
  | (CallAction & { action: "call" })
  | (GetValueAction & { action: "get" })
  | (IncrementAction & { action: "inc" })
  | (GetValueAction & { action: "load" })
  | (SayAction & { action: "say" })
  | (SetValueAction & { action: "set" });

export const enter1Schema: Schema<Enter1> = s.discriminatedUnion<Enter1>("action", {
  call: callActionSchema,
  get: getValueActionSchema,
  inc: incrementActionSchema,
  load: getValueActionSchema,
  say: sayActionSchema,
  set: setValueActionSchema,
});
