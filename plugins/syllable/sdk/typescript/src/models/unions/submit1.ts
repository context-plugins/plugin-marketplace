import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { callActionSchema, type CallAction } from "../call-action.js";
import { incrementActionSchema, type IncrementAction } from "../increment-action.js";
import { saveActionSchema, type SaveAction } from "../save-action.js";
import { sayActionSchema, type SayAction } from "../say-action.js";
import { setValueActionSchema, type SetValueAction } from "../set-value-action.js";

export type Submit1 =
  | (CallAction & { action: "call" })
  | (IncrementAction & { action: "inc" })
  | (SaveAction & { action: "save" })
  | (SayAction & { action: "say" })
  | (SetValueAction & { action: "set" });

export const submit1Schema: Schema<Submit1> = s.discriminatedUnion<Submit1>("action", {
  call: callActionSchema,
  inc: incrementActionSchema,
  save: saveActionSchema,
  say: sayActionSchema,
  set: setValueActionSchema,
});
