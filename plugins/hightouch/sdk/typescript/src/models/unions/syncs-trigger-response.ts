import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { triggerRunOutputSchema, type TriggerRunOutput } from "../trigger-run-output.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type SyncsTriggerResponse = TriggerRunOutput | ValidateErrorJson;

export const syncsTriggerResponseSchema: Schema<SyncsTriggerResponse> = s.of<SyncsTriggerResponse>(
  s.union([s.lazy(() => triggerRunOutputSchema), s.lazy(() => validateErrorJsonSchema)]),
);
