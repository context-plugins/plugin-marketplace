import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { directorySymbolSchema, type DirectorySymbol } from "./directory-symbol.js";

export type DirectorySector = {
  sector: string;
  slug: string;
  /** Total index-eligible symbols across all pages of the sector. */
  count: number;
  top: DirectorySymbol[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const directorySectorSchema: Schema<DirectorySector> = s.object<DirectorySector>(
  {
    sector: s.string(),
    slug: s.string(),
    count: s.int(),
    top: s.array(s.lazy(() => directorySymbolSchema)),
  },
  { additionalProperties: s.json() },
);
