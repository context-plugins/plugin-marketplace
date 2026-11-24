import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { certificateFilterSchema, type CertificateFilter } from "./certificate-filter.js";

/** Exactly one member is set. */
export type CertificateFilterStatement = {
  /** A list of filter statements that must all be true. */
  and?: CertificateFilterStatement[];
  /** A list of filter statements where at least one must be true. */
  or?: CertificateFilterStatement[];
  /** Exactly one member is set. */
  not?: CertificateFilterStatement;
  /** Exactly one member is set. */
  filter?: CertificateFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const certificateFilterStatementSchema: Schema<CertificateFilterStatement> =
  s.object<CertificateFilterStatement>(
    {
      and: s.optional(s.array(s.lazy(() => certificateFilterStatementSchema))),
      or: s.optional(s.array(s.lazy(() => certificateFilterStatementSchema))),
      not: s.optional(s.lazy(() => certificateFilterStatementSchema)),
      filter: s.optional(s.lazy(() => certificateFilterSchema)),
      _keysMap: {
        and: "And",
        or: "Or",
        not: "Not",
        filter: "Filter",
      },
    },
    { additionalProperties: s.json() },
  );
