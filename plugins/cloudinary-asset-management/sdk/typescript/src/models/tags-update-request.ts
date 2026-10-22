import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commandSchema, type Command } from "./command.js";
import { deliveryTypeAll1Schema, type DeliveryTypeAll1 } from "./unions/delivery-type-all1.js";

/** A tag command plus the assets it applies to. */
export type TagsUpdateRequest = {
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
   * The tag operation to apply.
   *
   * - `add` adds the given tags, leaving existing tags untouched.
   * - `remove` removes the given tags, leaving other tags untouched.
   * - `replace` overwrites the full tag list with the given tags.
   * - `remove_all` clears every tag. The `tags` field is ignored.
   */
  command: Command;
  /**
   * The tag names to apply. Required for `add`, `remove`, and `replace`; ignored for `remove_all`.
   * A tag name must not contain a comma.
   */
  tags?: string[];
};

export const tagsUpdateRequestSchema: Schema<TagsUpdateRequest> = s.object<TagsUpdateRequest>({
  publicIds: s.array(s.string()),
  type: s.optional(s.lazy(() => deliveryTypeAll1Schema)),
  command: commandSchema,
  tags: s.optional(s.array(s.string())),
  _keysMap: {
    publicIds: "public_ids",
  },
});
