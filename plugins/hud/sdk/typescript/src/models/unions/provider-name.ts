import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ProviderName = string;

export const providerNameSchema: Schema<ProviderName> = s.of<ProviderName>(s.union([s.string()]));
