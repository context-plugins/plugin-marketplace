import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ProviderIconUrl = string;

export const providerIconUrlSchema: Schema<ProviderIconUrl> = s.of<ProviderIconUrl>(s.union([s.string()]));
