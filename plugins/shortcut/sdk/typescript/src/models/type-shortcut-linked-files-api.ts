import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The integration type of the file (e.g. google, dropbox, box). */
export const TypeShortcutLinkedFilesApi = {
  Google: "google",
  Url: "url",
  Dropbox: "dropbox",
  Box: "box",
  Onedrive: "onedrive",
} as const;
export type TypeShortcutLinkedFilesApi =
  | (typeof TypeShortcutLinkedFilesApi)[keyof typeof TypeShortcutLinkedFilesApi]
  | (string & {});

export const typeShortcutLinkedFilesApiSchema: EnumSchema<TypeShortcutLinkedFilesApi> =
  s.enumOf<TypeShortcutLinkedFilesApi>(TypeShortcutLinkedFilesApi);
