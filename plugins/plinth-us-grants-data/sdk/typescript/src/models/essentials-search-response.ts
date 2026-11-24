import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./unions/mode.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

/** Paged with `from`/`size` — Candid's essentials shape, NOT the `page`/`limit` of /grants/*. */
export type EssentialsSearchResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  hits: number;
  size: number;
  resultsCount: number;
  mode?: Mode;
  results: Record<string, unknown>[];
  /** Zero-based offset of the first row returned. */
  from: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const essentialsSearchResponseSchema: Schema<EssentialsSearchResponse> =
  s.object<EssentialsSearchResponse>(
    {
      code: s.defaulted(s.int(), 200),
      message: s.string(),
      xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
      hits: s.int(),
      size: s.int(),
      resultsCount: s.int(),
      mode: s.optional(s.lazy(() => modeSchema)),
      results: s.array(s.record(s.string(), s.unknown())),
      from: s.int(),
      _keysMap: {
        xPlinth: "x_plinth",
        resultsCount: "results_count",
      },
    },
    { additionalProperties: s.json() },
  );
