import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { emailConfigurationsSchema, type EmailConfigurations } from "../email-configurations.js";

/** Email configurations (required for email channels) */
export type Email1 = EmailConfigurations;

export const email1Schema: Schema<Email1> = s.of<Email1>(s.union([s.lazy(() => emailConfigurationsSchema)]));
