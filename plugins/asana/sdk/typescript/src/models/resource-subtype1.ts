import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the attachment. Must be one of the given values. If not specified, a file attachment
 * of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a
 * `parent`, `name`, and `url` must also be provided.
 */
export const ResourceSubtype1 = {
  Asana: "asana",
  Dropbox: "dropbox",
  Gdrive: "gdrive",
  Onedrive: "onedrive",
  Box: "box",
  Vimeo: "vimeo",
  External: "external",
} as const;
export type ResourceSubtype1 = (typeof ResourceSubtype1)[keyof typeof ResourceSubtype1] | (string & {});

export const resourceSubtype1Schema: EnumSchema<ResourceSubtype1> =
  s.enumOf<ResourceSubtype1>(ResourceSubtype1);
