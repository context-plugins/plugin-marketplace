import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [shipment](get-shipment) this capture is associated with. Not present
 * if it isn't associated with a shipment.
 */
export type UrlNullable7 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable7Schema: Schema<UrlNullable7> = s.object<UrlNullable7>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
