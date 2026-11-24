import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data4 = {
  /**
   * The best source on file (lowest priority value), with the same fields as a `sources` row. Null
   * when no public record names a management company.
   */
  best?: Record<string, unknown> | null;
  /**
   * Every source, best first: manager_name, source, priority (lower is stronger), provenance,
   * inferred (true when we matched the firm, for example by a licensed firm's office or email
   * domain, rather than a filing naming it), and manager_org_id (the firm's Common Elements org id
   * where the source links one, else null).
   */
  sources?: Record<string, unknown>[];
  /** The same rows as `sources`, kept for existing integrations. Best first. */
  managers?: Record<string, unknown>[];
  /**
   * Platform-confirmed management edges: to_org_id (the management company's org id),
   * relationship_type ("managed_by"), status, start_date, end_date, contract_value.
   */
  confirmedRelationships?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data4Schema: Schema<Data4> = s.object<Data4>(
  {
    best: s.optionalNullable(s.record(s.string(), s.unknown())),
    sources: s.optional(s.array(s.record(s.string(), s.unknown()))),
    managers: s.optional(s.array(s.record(s.string(), s.unknown()))),
    confirmedRelationships: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      confirmedRelationships: "confirmed_relationships",
    },
  },
  { additionalProperties: s.json() },
);
