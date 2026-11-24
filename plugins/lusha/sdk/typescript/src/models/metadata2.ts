import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalSchema, type Signal } from "./signal.js";

/** Metadata for the search to filter the results */
export type Metadata2 = {
  /**
   * Set this to true to refresh job information for the contact. This replaces any outdated job
   * details with the most current information. By default, Lusha returns results for records that
   * have at least one of the specified contact details (e.g., phone number or email address).
   */
  refreshJobInfo?: boolean;
  /**
   * Filters the results based on specific contact details. Use the following options:
   * emailAddresses, phoneNumbers
   */
  filterBy?: string;
  /** Set `revealEmails=true` to retrieve only the email address of the contact. */
  revealEmails?: boolean;
  /** Set `revealPhones=true` to retrieve only the phone number of the contact. */
  revealPhones?: boolean;
  /**
   * Array of signal types to retrieve for the contact.
   * - `allSignals`: All available signal types
   * - `promotion`: Promotion signals
   * - `companyChange`: Company change signals
   */
  signals?: Signal[];
  /**
   * Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
   * specified.
   */
  signalsStartDate?: string;
  /**
   * When set to true, returns a simplified contact profile with basic information only.
   *
   * @default false
   */
  partialProfile?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metadata2Schema: Schema<Metadata2> = s.object<Metadata2>(
  {
    refreshJobInfo: s.optional(s.boolean()),
    filterBy: s.optional(s.string()),
    revealEmails: s.optional(s.boolean()),
    revealPhones: s.optional(s.boolean()),
    signals: s.optional(s.array(s.lazy(() => signalSchema))),
    signalsStartDate: s.optional(s.dateOnly()),
    partialProfile: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
