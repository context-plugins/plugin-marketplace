import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { shareCapitalSchema, type ShareCapital } from "./share-capital.js";

/**
 * Official company registry data from Nordic registries (e.g. Bolagsverket, PRH). Null if no
 * registry data exists.
 */
export type Registry = {
  /** Name of the official registry */
  source?: string | null;
  /** Official registered company name */
  registeredName?: string | null;
  /** Legal form of the company */
  companyForm?: string | null;
  /** Registered city */
  city?: string | null;
  /** Founding or registration date */
  founded?: string | null;
  /** Number of employees */
  employees?: number | null;
  /** Industry classification from registry */
  industry?: string | null;
  /** Whether the company is in bankruptcy proceedings */
  bankruptcy?: boolean | null;
  /** Whether the company is under liquidation */
  underLiquidation?: boolean | null;
  /** Registered share capital */
  shareCapital?: ShareCapital | null;
  /** Institutional sector classification */
  institutionalSector?: string | null;
  /** Date the company was deregistered, if applicable */
  deregisteredAt?: string | null;
  /** Reason for deregistration */
  deregistrationReason?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registrySchema: Schema<Registry> = s.object<Registry>(
  {
    source: s.optionalNullable(s.string()),
    registeredName: s.optionalNullable(s.string()),
    companyForm: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    founded: s.optionalNullable(s.string()),
    employees: s.optionalNullable(s.int()),
    industry: s.optionalNullable(s.string()),
    bankruptcy: s.optionalNullable(s.boolean()),
    underLiquidation: s.optionalNullable(s.boolean()),
    shareCapital: s.optionalNullable(s.lazy(() => shareCapitalSchema)),
    institutionalSector: s.optionalNullable(s.string()),
    deregisteredAt: s.optionalNullable(s.string()),
    deregistrationReason: s.optionalNullable(s.string()),
    _keysMap: {
      registeredName: "registered_name",
      companyForm: "company_form",
      underLiquidation: "under_liquidation",
      shareCapital: "share_capital",
      institutionalSector: "institutional_sector",
      deregisteredAt: "deregistered_at",
      deregistrationReason: "deregistration_reason",
    },
  },
  { additionalProperties: s.json() },
);
