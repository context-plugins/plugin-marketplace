import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the extension was published */
export const PublishedAs = {
  Global: "Global",
  Dev: "Dev",
  Pte: "PTE",
} as const;
export type PublishedAs = (typeof PublishedAs)[keyof typeof PublishedAs] | (string & {});

export const publishedAsSchema: EnumSchema<PublishedAs> = s.enumOf<PublishedAs>(PublishedAs);
