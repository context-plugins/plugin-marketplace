import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityFiltersSchema, type EntityFilters } from "./entity-filters.js";

/**
 * What retrieval is narrowed to for a turn: whole apps, and selections below app level (record
 * groups, folders, records). The keys are a union. For **org assistant** chat streams, send
 * explicit lists. For **agent** chat streams, send explicit id lists, or **omit** `filters` (and
 * `tools`) to let the service use the agent’s stored knowledge and tool configuration. Sending `{
 * "apps": [], "kb": [] }` on an agent stream means **no** knowledge sources for that turn (it is
 * not “full org default”).
 *
 * A selection below app level is the whole scope of the turn: with `recordGroups`, `records` or
 * `recordsExact` present, an absent or empty `apps` / `kb` means none of them. A selected node that
 * does not exist or that the caller cannot read contributes nothing; when nothing valid remains the
 * turn searches nothing. `/search` answers 404 for that; a chat turn is not failed, its search
 * simply finds nothing. At most 200 ids may be sent in one request, counted across all keys, and
 * every id must be a valid UUID. A key this schema does not list is ignored by the gateway rather
 * than refused.
 *
 * A selection that covers more than the configured number of nodes (50,000 by default), or that
 * touches a source still being prepared for folder-level search, is refused: `/search` and the
 * non-streaming chat routes answer 422 with the message, and a chat stream ends with an error frame
 * (`RUN_ERROR`, or `error` on the legacy protocol) whose `code` is `selection_too_large` or
 * `selection_not_ready` and whose `message` says what to change. No model call is made for such a
 * turn.
 */
export type Filters = {
  /**
   * Whole apps: connector instance ids and collection (knowledge base) ids. Each element must be a
   * valid UUID.
   */
  apps?: string[];
  /**
   * Older name for collection ids; treated the same as `apps`. Each element must be a valid UUID.
   */
  kb?: string[];
  /**
   * Record group ids (a drive, a space, a project). Each selects the group, the groups nested in it
   * and every record that belongs to them. Each element must be a valid UUID.
   */
  recordGroups?: string[];
  /**
   * Folder or record ids. Each selects the node and everything under it (child items and
   * attachments). Each element must be a valid UUID.
   */
  records?: string[];
  /** Record ids selected alone, without what is under them. Each element must be a valid UUID. */
  recordsExact?: string[];
  /**
   * **Experimental** named-entity constraints (Labs flag `ENABLE_NAMED_ENTITY_EXTRACTION`, or
   * `HIGH_ACCURACY_MODE`). Every constraint must hold for the same record: an amount and a date
   * match a record that mentions both, not one entity that is both. `name`/`entityIds` match entity
   * nodes; `mentionedDate`, `amount`, `quantity` and `percent` match typed values the record
   * mentions (any date mentioned, not a role such as "signed on"). A kind of a typed constraint's
   * own kind narrows it (`currency` with `amount`); other kinds are a constraint of their own. Only
   * records the caller may read are considered: every empty result reads the same.
   *
   * An unusable filter (unknown kind, bad currency, a range whose low end is above its high end, or
   * a blank name) fails request validation with 400, including on conversation requests. On `POST
   * /search`, a valid filter matching too many readable records is refused with 422. Conversation
   * operations apply a valid filter to every search behind the answer; if retrieval refuses it, the
   * request does not fail and the answer says why the filter could not be applied.
   */
  entityFilters?: EntityFilters;
  /**
   * Reserved for the typed filter tree that will replace `entityFilters`; any value is refused with
   * 400.
   */
  where?: Record<string, unknown>;
};

export const filtersSchema: Schema<Filters> = s.object<Filters>({
  apps: s.optional(s.array(s.string())),
  kb: s.optional(s.array(s.string())),
  recordGroups: s.optional(s.array(s.string())),
  records: s.optional(s.array(s.string())),
  recordsExact: s.optional(s.array(s.string())),
  entityFilters: s.optional(s.lazy(() => entityFiltersSchema)),
  where: s.optional(s.record(s.string(), s.unknown())),
});
