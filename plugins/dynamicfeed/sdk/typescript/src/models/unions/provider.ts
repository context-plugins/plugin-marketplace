import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** filter by provider, e.g. SpaceX, openai, anthropic, google, ... */
export type Provider = string;

export const providerSchema: Schema<Provider> = s.of<Provider>(s.union([s.string()]));
