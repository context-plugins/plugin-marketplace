import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tierSchema, type Tier } from "./tier.js";

/**
 * What a company's own website states about itself (provenance tier website_declared): identity
 * context only, never a registry result. Present only when no Jid file holds or is associated with
 * the domain.
 */
export type WebsiteDeclared = {
  tier?: Tier;
  domain?: string;
  /** As printed, with its legal form */
  legalName?: string;
  tradeName?: string | null;
  /** As printed; null when the site prints addresses in several states */
  address?: string | null;
  state?: string | null;
  postalCode?: string | null;
  sourceUrl?: string;
  readAt?: Date;
  how?: string;
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const websiteDeclaredSchema: Schema<WebsiteDeclared> = s.object<WebsiteDeclared>(
  {
    tier: s.optional(s.lazy(() => tierSchema)),
    domain: s.optional(s.string()),
    legalName: s.optional(s.string()),
    tradeName: s.optionalNullable(s.string()),
    address: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    postalCode: s.optionalNullable(s.string()),
    sourceUrl: s.optional(s.string()),
    readAt: s.optional(s.dateTime()),
    how: s.optional(s.string()),
    note: s.optional(s.string()),
    _keysMap: {
      legalName: "legal_name",
      tradeName: "trade_name",
      postalCode: "postal_code",
      sourceUrl: "source_url",
      readAt: "read_at",
    },
  },
  { additionalProperties: s.json() },
);
