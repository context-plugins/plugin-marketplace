import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ApiKeyOwner = string;

export const apiKeyOwnerSchema: Schema<ApiKeyOwner> = s.of<ApiKeyOwner>(s.union([s.string()]));
