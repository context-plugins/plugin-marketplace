import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boardSchema, type Board } from "./board.js";
import { coverageModelSchema, type CoverageModel } from "./coverage-model.js";

export type Regions1 = {
  code: string;
  name: string;
  requestable: boolean;
  /** Bookmakers with rows now. */
  bookmakers: number;
  exchanges: string[];
  matchedCoverage: boolean;
  coverageModel: CoverageModel;
  exchangeAvailable: boolean;
  board: Board;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const regions1Schema: Schema<Regions1> = s.object<Regions1>(
  {
    code: s.string(),
    name: s.string(),
    requestable: s.boolean(),
    bookmakers: s.int(),
    exchanges: s.array(s.string()),
    matchedCoverage: s.boolean(),
    coverageModel: coverageModelSchema,
    exchangeAvailable: s.boolean(),
    board: boardSchema,
    _keysMap: {
      matchedCoverage: "matched_coverage",
      coverageModel: "coverage_model",
      exchangeAvailable: "exchange_available",
    },
  },
  { additionalProperties: s.json() },
);
