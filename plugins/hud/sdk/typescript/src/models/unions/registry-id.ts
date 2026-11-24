import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RegistryId = string;

export const registryIdSchema: Schema<RegistryId> = s.of<RegistryId>(s.union([s.string()]));
