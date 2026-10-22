import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [order](get-order) this payment was created for. Not present if not
 * created for an order.
 */
export type Url17 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url17Schema: Schema<Url17> = s.object<Url17>({
  href: s.string(),
  type: s.string(),
});
