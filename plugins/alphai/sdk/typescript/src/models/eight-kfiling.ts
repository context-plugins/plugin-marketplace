import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Structured SEC 8-K filing: what the filing itself says, next to the AI read of it. One news row
 * fronts one filing.
 */
export type EightKFiling = {
  /**
   * Every item code the filing carries, in the filing's order (`["5.02", "9.01"]`). `?item=`
   * matches any of them. Empty for a filing SEC served no document for (header-only).
   */
  items: string[];
  /**
   * The item that drove the row's `category` (`2.02` → `earnings`, `2.01` → `mergers_acquisitions`,
   * the rest → `corporate_actions`). `null` when the filing lists no items.
   */
  primaryItem?: string | null;
  /** SEC accession number of the filing — the id to cite. */
  accessionNumber: string;
  /** When EDGAR accepted the filing (UTC). */
  filedAt: Date;
  /**
   * The filing's own "date of report" — the date of the event it reports, which can precede
   * `filed_at` by up to four business days. `null` when the header carries none.
   */
  eventDate?: string | null;
  /**
   * The press-release exhibit (EX-99.x) the summary was built from, on sec.gov. `null` when the
   * filing has no such exhibit (the summary then reads the cover document).
   */
  exhibitUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const eightKFilingProperties: s.Shape<EightKFiling> = {
  items: s.array(s.string()),
  primaryItem: s.optionalNullable(s.string()),
  accessionNumber: s.string(),
  filedAt: s.dateTime(),
  eventDate: s.optionalNullable(s.dateOnly()),
  exhibitUrl: s.optionalNullable(s.string()),
  _keysMap: {
    primaryItem: "primary_item",
    accessionNumber: "accession_number",
    filedAt: "filed_at",
    eventDate: "event_date",
    exhibitUrl: "exhibit_url",
  },
};

export const eightKFilingInternalSchema: Schema<EightKFiling> = s.object<EightKFiling>(
  eightKFilingProperties,
  { additionalProperties: s.json() },
);

export const eightKFilingSchema: Schema<EightKFiling> = s.lazySchema(() =>
  s.object<EightKFiling>(
    {
      ...eightKFilingProperties,
      exhibitUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
