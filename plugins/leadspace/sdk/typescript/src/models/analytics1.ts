import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Analytics1 = {
  installedBaseTechnologies?: string[];
  webSiteTechnologies?: string[];
  companyTechnologiesCategories?: string[];
  customTechnologiesCategories?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analytics1Schema: Schema<Analytics1> = s.object<Analytics1>(
  {
    installedBaseTechnologies: s.optional(s.array(s.string())),
    webSiteTechnologies: s.optional(s.array(s.string())),
    companyTechnologiesCategories: s.optional(s.array(s.string())),
    customTechnologiesCategories: s.optional(s.array(s.string())),
    _keysMap: {
      installedBaseTechnologies: "installed_base_technologies",
      webSiteTechnologies: "web_site_technologies",
      companyTechnologiesCategories: "company_technologies_categories",
    },
  },
  { additionalProperties: s.json() },
);
