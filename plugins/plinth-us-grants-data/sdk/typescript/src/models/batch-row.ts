import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ein1Schema, type Ein1 } from "./unions/ein1.js";
import { name1Schema, type Name1 } from "./unions/name1.js";
import { stateSchema, type State } from "./unions/state.js";
import { toSchema, type To } from "./unions/to.js";
import { year1Schema, type Year1 } from "./unions/year1.js";

export type BatchRow = {
  /** EIN in any format (131837418 or 13-1837418). Either this or `name`. */
  ein?: Ein1;
  /**
   * Organization name to resolve when no EIN is known. Matched exactly after normalizing case and
   * punctuation; a name several organizations share answers `ambiguous` with the candidates, and
   * `state` narrows it.
   */
  name?: Name1;
  /** Two-letter state, used only to narrow a `name` that matches in several states. */
  state?: State;
  /** One key from GET /batch/fields. */
  field: string;
  /**
   * Filing year, for the grant-graph fields. Ignored, with a note, on fields that read the latest
   * filing.
   */
  year?: Year1;
  /**
   * Second EIN, for the pair fields (grants_to_*): the recipient, where the row's organization is
   * the funder.
   */
  to?: To;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchRowSchema: Schema<BatchRow> = s.object<BatchRow>(
  {
    ein: s.optional(s.lazy(() => ein1Schema)),
    name: s.optional(s.lazy(() => name1Schema)),
    state: s.optional(s.lazy(() => stateSchema)),
    field: s.string(),
    year: s.optional(s.lazy(() => year1Schema)),
    to: s.optional(s.lazy(() => toSchema)),
  },
  { additionalProperties: s.json() },
);
