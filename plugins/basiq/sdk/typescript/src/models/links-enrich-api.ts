import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksEnrichApi = {
  /** Provides a reference link to the original query. */
  self?: string;
  /** Provides link to master logo. Where null no merchant logo is available. */
  logoMaster?: string | null;
  /** Provides link to thumb logo. Where null no merchant logo is available. */
  logoThumb?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksEnrichApiSchema: Schema<LinksEnrichApi> = s.object<LinksEnrichApi>(
  {
    self: s.optional(s.string()),
    logoMaster: s.optionalNullable(s.string()),
    logoThumb: s.optionalNullable(s.string()),
    _keysMap: {
      logoMaster: "logo-master",
      logoThumb: "logo-thumb",
    },
  },
  { additionalProperties: s.json() },
);
