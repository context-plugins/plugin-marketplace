import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deliveryTypeAll1Schema, type DeliveryTypeAll1 } from "./unions/delivery-type-all1.js";
import {
  structuredMetadataParamSchema,
  type StructuredMetadataParam,
} from "./unions/structured-metadata-param.js";

/** Structured metadata values plus the assets they apply to. */
export type MetadataUpdateRequest = {
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
   * A pipe-separated list or a map of custom metadata fields (by external_id) and the values to
   * assign to each of them. The = " and | characters can be supported as values when escaped with a
   * prepended backslash (\). For a multi-select field, you can set a maximum of 3000 different
   * metadata values on an asset.
   */
  metadata: StructuredMetadataParam;
  /**
   * Whether to clear a value already stored on the asset that is no longer valid — for example
   * because its datasource entry was deleted — instead of failing the update for that asset.
   * Applies only to fields governed by an active conditional metadata rule; an invalid value sent
   * in this request is always rejected. Default is false.
   */
  clearInvalid?: boolean;
};

export const metadataUpdateRequestSchema: Schema<MetadataUpdateRequest> = s.object<MetadataUpdateRequest>({
  publicIds: s.array(s.string()),
  type: s.optional(s.lazy(() => deliveryTypeAll1Schema)),
  metadata: structuredMetadataParamSchema,
  clearInvalid: s.optional(s.boolean()),
  _keysMap: {
    publicIds: "public_ids",
    clearInvalid: "clear_invalid",
  },
});
