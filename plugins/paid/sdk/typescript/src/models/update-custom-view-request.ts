import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customViewQuerySchema, type CustomViewQuery } from "./custom-view-query.js";
import { renderBundleEditSchema, type RenderBundleEdit } from "./render-bundle-edit.js";

export type UpdateCustomViewRequest = {
  /** New human-readable view name. */
  name?: string;
  /** New description; pass null to clear it. */
  description?: string | null;
  /**
   * Full replacement of the view's query list. Each SQL is re-validated (SELECT-only) exactly like
   * createCustomView. For changing one or two queries, prefer `queryUpserts`/`queryRemovals`
   * instead. Cannot be combined with them.
   */
  queries?: CustomViewQuery[];
  /**
   * Replacement render bundle. Re-validated (size cap, self-contained, paid:data listener) exactly
   * like createCustomView. For small changes, prefer `bundleEdits` instead. Cannot be combined with
   * `bundleEdits`.
   */
  renderBundle?: string;
  /**
   * PREFERRED for revisions: exact search-and-replace edits applied in order to the stored render
   * bundle, so you send only the changed text instead of re-transmitting the whole bundle. The
   * edited result passes the same validation as a full replacement. Cannot be combined with
   * `renderBundle`.
   */
  bundleEdits?: RenderBundleEdit[];
  /**
   * PREFERRED for revisions: per-query changes — each entry replaces the stored query with the same
   * id, or is appended as a new query. Queries not mentioned are left unchanged. Cannot be combined
   * with `queries`.
   */
  queryUpserts?: CustomViewQuery[];
  /**
   * Ids of stored queries to remove (applied before `queryUpserts`). Rejected if an id does not
   * exist. Cannot be combined with `queries`.
   */
  queryRemovals?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCustomViewRequestSchema: Schema<UpdateCustomViewRequest> =
  s.object<UpdateCustomViewRequest>(
    {
      name: s.optional(s.string()),
      description: s.optionalNullable(s.string()),
      queries: s.optional(s.array(s.lazy(() => customViewQuerySchema))),
      renderBundle: s.optional(s.string()),
      bundleEdits: s.optional(s.array(s.lazy(() => renderBundleEditSchema))),
      queryUpserts: s.optional(s.array(s.lazy(() => customViewQuerySchema))),
      queryRemovals: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
