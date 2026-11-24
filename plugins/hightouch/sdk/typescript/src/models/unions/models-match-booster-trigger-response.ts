import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import {
  matchBoosterTriggerOutputSchema,
  type MatchBoosterTriggerOutput,
} from "../match-booster-trigger-output.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type ModelsMatchBoosterTriggerResponse =
  | MatchBoosterTriggerOutput
  | ValidateErrorJson
  | InternalServerError;

export const modelsMatchBoosterTriggerResponseSchema: Schema<ModelsMatchBoosterTriggerResponse> =
  s.of<ModelsMatchBoosterTriggerResponse>(
    s.union([
      s.lazy(() => matchBoosterTriggerOutputSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
