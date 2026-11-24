import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ApiKeyId = string;

export const apiKeyIdSchema: Schema<ApiKeyId> = s.of<ApiKeyId>(s.union([s.string()]));
