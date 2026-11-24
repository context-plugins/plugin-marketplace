import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatumCommonelementsComAssociationResourcesApi = {
  /** Which physical source the record came from. Provenance travels with every row. */
  sourceKey?: string;
  /** The source's own identifier for the record. */
  recordId?: string;
  /** When the recorded event happened, where the source publishes a date. */
  occurredOn?: string | null;
  /** One-line description of the record, from the source's own headline column. */
  headline?: string | null;
  /**
   * The record's fields, projected through the source's column allowlist. A column added to a
   * backing table later cannot appear here unless it is added to that allowlist.
   */
  payload?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumCommonelementsComAssociationResourcesApiSchema: Schema<DatumCommonelementsComAssociationResourcesApi> =
  s.object<DatumCommonelementsComAssociationResourcesApi>(
    {
      sourceKey: s.optional(s.string()),
      recordId: s.optional(s.string()),
      occurredOn: s.optionalNullable(s.dateOnly()),
      headline: s.optionalNullable(s.string()),
      payload: s.optionalNullable(s.record(s.string(), s.unknown())),
      _keysMap: {
        sourceKey: "source_key",
        recordId: "record_id",
        occurredOn: "occurred_on",
      },
    },
    { additionalProperties: s.json() },
  );
