import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { getValueActionSchema, type GetValueAction } from "../get-value-action.js";
import { incrementActionSchema, type IncrementAction } from "../increment-action.js";
import { saveActionSchema, type SaveAction } from "../save-action.js";
import { setValueActionSchema, type SetValueAction } from "../set-value-action.js";

export type Presubmit1 =
  | (GetValueAction & { action: "get" })
  | (IncrementAction & { action: "inc" })
  | (GetValueAction & { action: "load" })
  | (SaveAction & { action: "save" })
  | (SetValueAction & { action: "set" });

export const presubmit1Schema: Schema<Presubmit1> = s.discriminatedUnion<Presubmit1>("action", {
  get: getValueActionSchema,
  inc: incrementActionSchema,
  load: getValueActionSchema,
  save: saveActionSchema,
  set: setValueActionSchema,
});
