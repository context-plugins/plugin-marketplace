import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lagSchema, type Lag } from "./lag.js";

export type Lags = {
  /** The LAGs. */
  lags?: Lag[];
  /**
   * The token to use to retrieve the next page of results. This value is null when there are no
   * more results to return.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lagsSchema: Schema<Lags> = s.object<Lags>(
  {
    lags: s.optional(s.array(s.lazy(() => lagSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
