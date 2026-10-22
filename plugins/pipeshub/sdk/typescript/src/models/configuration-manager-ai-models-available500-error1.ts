import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type ConfigurationManagerAiModelsAvailable500Error1 = {
  error: Error5;
};

export const configurationManagerAiModelsAvailable500Error1Schema: Schema<ConfigurationManagerAiModelsAvailable500Error1> =
  s.object<ConfigurationManagerAiModelsAvailable500Error1>({
    error: error5Schema,
  });
