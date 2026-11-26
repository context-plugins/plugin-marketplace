import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { directorySectorSchema, type DirectorySector } from "./directory-sector.js";
import { directorySymbolSchema, type DirectorySymbol } from "./directory-symbol.js";

export type SymbolDirectory = {
  mostActive: DirectorySymbol[];
  sectors: DirectorySector[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const symbolDirectorySchema: Schema<SymbolDirectory> = s.object<SymbolDirectory>(
  {
    mostActive: s.array(s.lazy(() => directorySymbolSchema)),
    sectors: s.array(s.lazy(() => directorySectorSchema)),
    _keysMap: {
      mostActive: "most_active",
    },
  },
  { additionalProperties: s.json() },
);
