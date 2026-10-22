import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error23Schema, type Error23 } from "./error23.js";

export type ConfigurationManagerAiModelsAvailable400Error = {
  error: Error23;
};

export const configurationManagerAiModelsAvailable400ErrorSchema: Schema<ConfigurationManagerAiModelsAvailable400Error> =
  s.object<ConfigurationManagerAiModelsAvailable400Error>({
    error: error23Schema,
  });
