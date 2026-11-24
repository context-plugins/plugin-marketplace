import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links1EnrichApi = {
  /** Provides a reference link to the original query. */
  self?: string;
  /**
   * Provides link to master logo. Logos are provided in a variety of formats: .svg, .png, .jpg,
   * jpeg, gif. Where null no merchant logo is available.
   */
  logoMaster?: string;
  /**
   * Provides link to thumb logo (where no thumb available master logo is returned for both). Logos
   * are provided in a variety of formats: .svg, .png, .jpg, jpeg, gif. Where null no merchant logo
   * is available.
   */
  logoThumb?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links1EnrichApiSchema: Schema<Links1EnrichApi> = s.object<Links1EnrichApi>(
  {
    self: s.optional(s.string()),
    logoMaster: s.optional(s.string()),
    logoThumb: s.optional(s.string()),
    _keysMap: {
      logoMaster: "logo-master",
      logoThumb: "logo-thumb",
    },
  },
  { additionalProperties: s.json() },
);
