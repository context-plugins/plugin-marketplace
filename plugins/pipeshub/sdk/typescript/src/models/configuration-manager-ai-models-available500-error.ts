import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type ConfigurationManagerAiModelsAvailable500Error = {
  error: Error5;
};

export const configurationManagerAiModelsAvailable500ErrorSchema: Schema<ConfigurationManagerAiModelsAvailable500Error> =
  s.object<ConfigurationManagerAiModelsAvailable500Error>({
    error: error5Schema,
  });
