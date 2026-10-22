import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { emailConfigurationsSchema, type EmailConfigurations } from "../email-configurations.js";

/** Email configurations for email channels. Only applies to email channels. */
export type Email = EmailConfigurations;

export const emailSchema: Schema<Email> = s.of<Email>(s.union([s.lazy(() => emailConfigurationsSchema)]));
