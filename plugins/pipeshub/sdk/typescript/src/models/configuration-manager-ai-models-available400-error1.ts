import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error23Schema, type Error23 } from "./error23.js";

export type ConfigurationManagerAiModelsAvailable400Error1 = {
  error: Error23;
};

export const configurationManagerAiModelsAvailable400Error1Schema: Schema<ConfigurationManagerAiModelsAvailable400Error1> =
  s.object<ConfigurationManagerAiModelsAvailable400Error1>({
    error: error23Schema,
  });
