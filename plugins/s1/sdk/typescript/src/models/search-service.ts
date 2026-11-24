import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchService = {
  Google: "google",
  Bing: "bing",
  Bingcn: "bingcn",
  Duckduckgo: "duckduckgo",
  Yahoo: "yahoo",
  Yandex: "yandex",
  Youtube: "youtube",
  X: "x",
  Reddit: "reddit",
  Github: "github",
  Arxiv: "arxiv",
  Wechat: "wechat",
  Bilibili: "bilibili",
  Imdb: "imdb",
  Wikipedia: "wikipedia",
  Baidu: "baidu",
  _360: "360",
  Quark: "quark",
} as const;
export type SearchService = (typeof SearchService)[keyof typeof SearchService] | (string & {});

export const searchServiceSchema: EnumSchema<SearchService> = s.enumOf<SearchService>(SearchService);
