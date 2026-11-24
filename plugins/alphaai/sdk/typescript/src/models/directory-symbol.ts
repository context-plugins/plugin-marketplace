import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DirectorySymbol = {
  ticker: string;
  name: string;
  /** Above-floor enriched-news rows mentioning the ticker in the window. */
  newsCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const directorySymbolSchema: Schema<DirectorySymbol> = s.object<DirectorySymbol>(
  {
    ticker: s.string(),
    name: s.string(),
    newsCount: s.int(),
    _keysMap: {
      newsCount: "news_count",
    },
  },
  { additionalProperties: s.json() },
);
