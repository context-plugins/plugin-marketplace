import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type XApiKey = string;

export const xApiKeySchema: Schema<XApiKey> = s.of<XApiKey>(s.union([s.string()]));
