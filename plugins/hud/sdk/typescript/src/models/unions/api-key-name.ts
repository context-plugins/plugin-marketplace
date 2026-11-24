import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ApiKeyName = string;

export const apiKeyNameSchema: Schema<ApiKeyName> = s.of<ApiKeyName>(s.union([s.string()]));
