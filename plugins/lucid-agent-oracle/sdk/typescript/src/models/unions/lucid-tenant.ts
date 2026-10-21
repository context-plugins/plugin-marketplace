import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LucidTenant = string;

export const lucidTenantSchema: Schema<LucidTenant> = s.of<LucidTenant>(s.union([s.string()]));
