import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the client's organization. */
export type Url60 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url60Schema: Schema<Url60> = s.object<Url60>({
  href: s.string(),
  type: s.string(),
});
