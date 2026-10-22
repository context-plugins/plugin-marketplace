import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** OAuth app credentials; keys follow the connector type's OAuth fields */
export type Config1 = {
  clientId?: string;
  clientSecret?: string;
};

export const config1Schema: Schema<Config1> = s.object<Config1>({
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
});
