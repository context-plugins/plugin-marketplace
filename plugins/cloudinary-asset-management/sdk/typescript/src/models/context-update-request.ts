import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { command1Schema, type Command1 } from "./command1.js";
import { deliveryTypeAll1Schema, type DeliveryTypeAll1 } from "./unions/delivery-type-all1.js";

/** A contextual-metadata command plus the assets it applies to. */
export type ContextUpdateRequest = {
  /**
   * The public IDs of the assets to apply the operation to. At most 1000 are processed per request;
   * any beyond the first 1000 are ignored rather than rejected. Public IDs that do not exist, or
   * that the caller lacks update permission for, are skipped rather than failing the request, so
   * the returned `public_ids` may be shorter than the requested list.
   */
  publicIds: string[];
  /** The delivery type of the assets to operate on. Defaults to `upload`. */
  type?: DeliveryTypeAll1;
  /**
   * The contextual-metadata operation to apply.
   *
   * - `add` merges the given key-value pairs into each asset's existing context. Keys already
   *   present are overwritten; keys not mentioned are left intact. `context` is required.
   * - `remove_all` clears all contextual metadata. The `context` field is ignored.
   */
  command: Command1;
  /**
   * The key-value pairs to merge. Required for `add`; ignored for `remove_all`. An empty value
   * deletes that key rather than storing an empty string, so `"alt="` removes `alt` while leaving
   * other keys intact. Deletes and sets may be combined: `"alt=|owner=new"`. A literal `=` or `|`
   * inside a value must be escaped with a prepending backslash, and a literal backslash must be
   * doubled. A double quote must not be escaped.
   */
  context?: string;
};

export const contextUpdateRequestSchema: Schema<ContextUpdateRequest> = s.object<ContextUpdateRequest>({
  publicIds: s.array(s.string()),
  type: s.optional(s.lazy(() => deliveryTypeAll1Schema)),
  command: command1Schema,
  context: s.optional(s.string()),
  _keysMap: {
    publicIds: "public_ids",
  },
});
