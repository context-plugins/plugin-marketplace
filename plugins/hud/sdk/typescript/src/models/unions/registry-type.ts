import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RegistryType = string;

export const registryTypeSchema: Schema<RegistryType> = s.of<RegistryType>(s.union([s.string()]));
