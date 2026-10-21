import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lookupFieldSchema, type LookupField } from "./lookup-field.js";
import { matchModeSchema, type MatchMode } from "./match-mode.js";
import { matchTypeSchema, type MatchType } from "./match-type.js";
import { outputFieldSchema, type OutputField } from "./output-field.js";

export type FunctionConfSchemaLookup = {
  /** Path to the lookup file. Reference environment variables via $. Example: $HOME/file.csv */
  file?: string;
  /**
   * Enable to use a disk-based lookup. This option displays only the settings relevant to
   * disk-based mode and hides those for in-memory lookups.
   */
  dbLookup?: boolean;
  /** Specifies the matching method based on the format and logic used in the lookup file */
  matchMode?: MatchMode;
  /**
   * Further defines how to handle multiple matches: return the first match, the most specific
   * match, or all matches
   */
  matchType?: MatchType;
  /**
   * Checks the lookup file periodically for changes and reloads it if modified. Set to -1 to
   * disable reloading (default). Useful for lookups not managed by Stream or not updated by an
   * external process. [Learn more](https://docs.cribl.io/stream/lookup-function/#advanced-settings)
   */
  reloadPeriodSec?: number;
  /** Fields that should be used to key into the lookup table */
  inFields?: LookupField[];
  /** Fields to add to events after matching lookup. Defaults to all if not specified. */
  outFields?: OutputField[];
  /** Add the looked-up values to _raw, as key=value pairs */
  addToEvent?: boolean;
  /** Whether to ignore case when performing lookups using Match Mode: Regex. */
  ignoreCase?: boolean;
};

export const functionConfSchemaLookupSchema: Schema<FunctionConfSchemaLookup> =
  s.object<FunctionConfSchemaLookup>({
    file: s.optional(s.string()),
    dbLookup: s.optional(s.boolean()),
    matchMode: s.optional(s.lazy(() => matchModeSchema)),
    matchType: s.optional(s.lazy(() => matchTypeSchema)),
    reloadPeriodSec: s.optional(s.float64()),
    inFields: s.optional(s.array(s.lazy(() => lookupFieldSchema))),
    outFields: s.optional(s.array(s.lazy(() => outputFieldSchema))),
    addToEvent: s.optional(s.boolean()),
    ignoreCase: s.optional(s.boolean()),
  });
