import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { mentionedDateSchema, type MentionedDate } from "./mentioned-date.js";
import { namedEntityKindSchema, type NamedEntityKind } from "./named-entity-kind.js";
import { percentSchema, type Percent } from "./percent.js";
import { quantitySchema, type Quantity } from "./quantity.js";

/**
 * **Experimental** named-entity constraints (Labs flag `ENABLE_NAMED_ENTITY_EXTRACTION`, or
 * `HIGH_ACCURACY_MODE`). Every constraint must hold for the same record: an amount and a date match
 * a record that mentions both, not one entity that is both. `name`/`entityIds` match entity nodes;
 * `mentionedDate`, `amount`, `quantity` and `percent` match typed values the record mentions (any
 * date mentioned, not a role such as "signed on"). A kind of a typed constraint's own kind narrows
 * it (`currency` with `amount`); other kinds are a constraint of their own. Only records the caller
 * may read are considered: every empty result reads the same.
 *
 * An unusable filter (unknown kind, bad currency, a range whose low end is above its high end, or a
 * blank name) fails request validation with 400, including on conversation requests. On `POST
 * /search`, a valid filter matching too many readable records is refused with 422. Conversation
 * operations apply a valid filter to every search behind the answer; if retrieval refuses it, the
 * request does not fail and the answer says why the filter could not be applied.
 */
export type EntityFilters = {
  /** Lowercase, as listed. The server trims and lowercases each kind before checking it. */
  kinds?: NamedEntityKind[];
  /**
   * Case-insensitive prefix of an entity name; surrounding blanks are trimmed and a blank name is
   * refused.
   */
  name?: string;
  /** Entity node ids, as returned by entity search. Typed values have no id. */
  entityIds?: string[];
  /** Overlap with a date the record mentions; half-open, `from` must not be after `to`. */
  mentionedDate?: MentionedDate;
  /** `min` must not be after `max`. */
  amount?: Amount;
  /** In SI units of the dimension. `min` must not be after `max`. */
  quantity?: Quantity;
  /** Fractions (0.125 is 12.5%). `min` must not be after `max`. */
  percent?: Percent;
};

export const entityFiltersSchema: Schema<EntityFilters> = s.object<EntityFilters>({
  kinds: s.optional(s.array(s.lazy(() => namedEntityKindSchema))),
  name: s.optional(s.string()),
  entityIds: s.optional(s.array(s.string())),
  mentionedDate: s.optional(s.lazy(() => mentionedDateSchema)),
  amount: s.optional(s.lazy(() => amountSchema)),
  quantity: s.optional(s.lazy(() => quantitySchema)),
  percent: s.optional(s.lazy(() => percentSchema)),
});
