import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatumCommonelementsComDatasetCatalogApi = {
  /** Stable key. The `source` and path segment both derive from it. */
  resourceKey?: string;
  /** Resource name, for display. */
  displayName?: string;
  /** What this resource gives you, in one sentence. */
  buyerSummary?: string;
  /** Where the underlying records come from. */
  provenanceLabel?: string;
  /** Plan required to read rows from this resource. */
  minTier?: string;
  /** Whether the key on this request can read its rows. */
  hasAccess?: boolean;
  /** What kind of coverage number this resource may be described with. */
  coverageBasis?: string;
  /** The caveat that says whether a zero means 'nothing happened' or 'not matched yet'. */
  coverageNote?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumCommonelementsComDatasetCatalogApiSchema: Schema<DatumCommonelementsComDatasetCatalogApi> =
  s.object<DatumCommonelementsComDatasetCatalogApi>(
    {
      resourceKey: s.optional(s.string()),
      displayName: s.optional(s.string()),
      buyerSummary: s.optional(s.string()),
      provenanceLabel: s.optional(s.string()),
      minTier: s.optional(s.string()),
      hasAccess: s.optional(s.boolean()),
      coverageBasis: s.optional(s.string()),
      coverageNote: s.optional(s.string()),
      _keysMap: {
        resourceKey: "resource_key",
        displayName: "display_name",
        buyerSummary: "buyer_summary",
        provenanceLabel: "provenance_label",
        minTier: "min_tier",
        hasAccess: "has_access",
        coverageBasis: "coverage_basis",
        coverageNote: "coverage_note",
      },
    },
    { additionalProperties: s.json() },
  );
