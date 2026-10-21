import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type ConfigurationManagerAiModelsAvailable401Error = {
  error: Error5;
};

export const configurationManagerAiModelsAvailable401ErrorSchema: Schema<ConfigurationManagerAiModelsAvailable401Error> =
  s.object<ConfigurationManagerAiModelsAvailable401Error>({
    error: error5Schema,
  });
