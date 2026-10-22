import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { image1Schema, type Image1 } from "./image1.js";

export type Issuer = {
  resource: string;
  id: string;
  /** The full name of the issuer. */
  name: string;
  /**
   * URLs of images representing the issuer. required:
   *   - size1x
   *   - size2x
   *   - svg
   */
  image: Image1;
};

export const issuerSchema: Schema<Issuer> = s.object<Issuer>({
  resource: s.string(),
  id: s.string(),
  name: s.string(),
  image: image1Schema,
});
