import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type ConfigurationManagerAiModelsAvailable403Error = {
  error: Error5;
};

export const configurationManagerAiModelsAvailable403ErrorSchema: Schema<ConfigurationManagerAiModelsAvailable403Error> =
  s.object<ConfigurationManagerAiModelsAvailable403Error>({
    error: error5Schema,
  });
