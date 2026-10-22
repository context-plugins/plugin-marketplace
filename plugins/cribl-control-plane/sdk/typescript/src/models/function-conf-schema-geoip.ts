import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalFieldSchema, type AdditionalField } from "./additional-field.js";

export type FunctionConfSchemaGeoip = {
  /**
   * Select an uploaded Maxmind database, or specify path to a Maxmind database with .mmdb extension
   */
  file?: string;
  /** Field name in which to find an IP to look up. Can be nested. */
  inField?: string;
  /** Field name in which to store the GeoIP lookup results */
  outField?: string;
  /** Additional IP fields on which to perform GeoIP lookups. */
  additionalFields?: AdditionalField[];
  /** Search-specific mappings for granular control over event enrichment */
  outFieldMappings?: Record<string, unknown>;
};

export const functionConfSchemaGeoipSchema: Schema<FunctionConfSchemaGeoip> =
  s.object<FunctionConfSchemaGeoip>({
    file: s.optional(s.string()),
    inField: s.optional(s.string()),
    outField: s.optional(s.string()),
    additionalFields: s.optional(s.array(s.lazy(() => additionalFieldSchema))),
    outFieldMappings: s.optional(s.record(s.string(), s.unknown())),
  });
