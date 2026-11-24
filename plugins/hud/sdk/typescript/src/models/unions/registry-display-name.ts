import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RegistryDisplayName = string;

export const registryDisplayNameSchema: Schema<RegistryDisplayName> = s.of<RegistryDisplayName>(
  s.union([s.string()]),
);
