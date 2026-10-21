import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** URLs of images representing the payment method issuer. */
export type Image2 = {
  /** The URL pointing to an icon of 32 by 24 pixels. */
  size1X?: string;
  /** The URL pointing to an icon of 64 by 48 pixels. */
  size2X?: string;
  /**
   * The URL pointing to a vector version of the icon. Usage of this format is preferred, since the
   * icon can scale to any desired size without compromising visual quality.
   */
  svg?: string;
};

export const image2Schema: Schema<Image2> = s.object<Image2>({
  size1X: s.optional(s.string()),
  size2X: s.optional(s.string()),
  svg: s.optional(s.string()),
  _keysMap: {
    size1X: "size1x",
    size2X: "size2x",
  },
});
