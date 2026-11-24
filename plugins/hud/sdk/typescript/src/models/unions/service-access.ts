import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ServiceAccess = boolean;

export const serviceAccessSchema: Schema<ServiceAccess> = s.of<ServiceAccess>(s.union([s.boolean()]));
