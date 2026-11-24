import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AlsoListedOn = {
  /** Ticker on this secondary exchange */
  ticker: string;
  /** ISO 10383 Market Identifier Code of this exchange */
  micCode: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const alsoListedOnSchema: Schema<AlsoListedOn> = s.object<AlsoListedOn>(
  {
    ticker: s.string(),
    micCode: s.string(),
    _keysMap: {
      micCode: "mic_code",
    },
  },
  { additionalProperties: s.json() },
);
