import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { updateFrequenciesSchema, type UpdateFrequencies } from "./update-frequencies.js";

export type DatabaseUpdates = {
  domainWhois?: UpdateFrequencies;
  dns?: UpdateFrequencies;
  subdomains?: UpdateFrequencies;
  ipWhois?: UpdateFrequencies;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const databaseUpdatesSchema: Schema<DatabaseUpdates> = s.object<DatabaseUpdates>(
  {
    domainWhois: s.optional(s.lazy(() => updateFrequenciesSchema)),
    dns: s.optional(s.lazy(() => updateFrequenciesSchema)),
    subdomains: s.optional(s.lazy(() => updateFrequenciesSchema)),
    ipWhois: s.optional(s.lazy(() => updateFrequenciesSchema)),
    _keysMap: {
      domainWhois: "domain_whois",
      ipWhois: "ip_whois",
    },
  },
  { additionalProperties: s.json() },
);
