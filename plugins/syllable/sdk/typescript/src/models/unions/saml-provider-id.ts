import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** SAML provider ID for user authentication */
export type SamlProviderId = string;

export const samlProviderIdSchema: Schema<SamlProviderId> = s.of<SamlProviderId>(s.union([s.string()]));
