import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A reference to an external image by HTTPS URL. */
export type UrlReference = {
  /** Discriminator identifying this as an external-URL reference. @default "url" */
  sourceType?: "url";
  /** HTTPS URL of the reference image. */
  url: string;
};

export const urlReferenceSchema: Schema<UrlReference> = s.object<UrlReference>({
  sourceType: s.defaulted(s.literal("url"), "url"),
  url: s.string(),
  _keysMap: {
    sourceType: "source_type",
  },
});
