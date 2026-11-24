import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { definitionSchema, type Definition } from "./unions/definition.js";
import { dollarsSchema, type Dollars } from "./unions/dollars.js";
import { grantsSchema, type Grants } from "./unions/grants.js";
import { unavailableSchema, type Unavailable } from "./unions/unavailable.js";

/** What one `?exclude=` class cost, measured against the caller's own filter. */
export type ExcludedClass = {
  /** Rows dropped. Null when the cost could not be measured — see `unavailable`. */
  grants?: Grants;
  /** Dollars dropped. Null when the cost could not be measured. */
  dollars?: Dollars;
  /** What this class means, single-sourced from config/candid-compat.json. */
  definition?: Definition;
  /**
   * Present only when the accounting failed. The totals in the response are unaffected — a failed
   * measurement never fails a correct answer.
   */
  unavailable?: Unavailable;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const excludedClassSchema: Schema<ExcludedClass> = s.object<ExcludedClass>(
  {
    grants: s.optional(s.lazy(() => grantsSchema)),
    dollars: s.optional(s.lazy(() => dollarsSchema)),
    definition: s.optional(s.lazy(() => definitionSchema)),
    unavailable: s.optional(s.lazy(() => unavailableSchema)),
  },
  { additionalProperties: s.json() },
);
