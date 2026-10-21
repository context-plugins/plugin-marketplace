import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** OpenRouter datacenter metadata. */
export type OpenRouterDatacenter = {
  /** ISO 3166-1 alpha-2 country code. */
  countryCode: string;
};

export const openRouterDatacenterSchema: Schema<OpenRouterDatacenter> = s.object<OpenRouterDatacenter>({
  countryCode: s.string(),
  _keysMap: {
    countryCode: "country_code",
  },
});
