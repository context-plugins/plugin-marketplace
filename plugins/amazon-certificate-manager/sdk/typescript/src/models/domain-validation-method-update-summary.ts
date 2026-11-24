import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fromSchema, type From } from "./from.js";
import { toSchema, type To } from "./to.js";

export type DomainValidationMethodUpdateSummary = {
  /** The validation method that the certificate was using before the update. */
  from?: From;
  /** The target validation method for the update. */
  to?: To;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainValidationMethodUpdateSummarySchema: Schema<DomainValidationMethodUpdateSummary> =
  s.object<DomainValidationMethodUpdateSummary>(
    {
      from: s.optional(s.lazy(() => fromSchema)),
      to: s.optional(s.lazy(() => toSchema)),
      _keysMap: {
        from: "From",
        to: "To",
      },
    },
    { additionalProperties: s.json() },
  );
