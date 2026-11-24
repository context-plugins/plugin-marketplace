import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { directorySymbolSchema, type DirectorySymbol } from "./directory-symbol.js";

export type SectorSymbols = {
  sector: string;
  slug: string;
  /** Number of symbols on this page. */
  count: number;
  /** Total index-eligible symbols in the sector. */
  totalCount: number;
  page: number;
  /** @default 500 */
  pageSize?: 500;
  hasNext: boolean;
  symbols: DirectorySymbol[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const sectorSymbolsProperties: s.Shape<SectorSymbols> = {
  sector: s.string(),
  slug: s.string(),
  count: s.int(),
  totalCount: s.int(),
  page: s.int(),
  pageSize: s.defaulted(s.literal(500), 500),
  hasNext: s.boolean(),
  symbols: s.array(s.lazy(() => directorySymbolSchema)),
  _keysMap: {
    totalCount: "total_count",
    pageSize: "page_size",
    hasNext: "has_next",
  },
};

export const sectorSymbolsInternalSchema: Schema<SectorSymbols> = s.object<SectorSymbols>(
  sectorSymbolsProperties,
  { additionalProperties: s.json() },
);

export const sectorSymbolsSchema: Schema<SectorSymbols> = s.lazySchema(() =>
  s.object<SectorSymbols>(
    {
      ...sectorSymbolsProperties,
      page: s.int().check(s.gte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
