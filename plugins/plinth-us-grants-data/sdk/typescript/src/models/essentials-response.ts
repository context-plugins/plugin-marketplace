import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

export type EssentialsResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  /** Identity, address, classification and headline financials. */
  organization: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const essentialsResponseSchema: Schema<EssentialsResponse> = s.object<EssentialsResponse>(
  {
    code: s.defaulted(s.int(), 200),
    message: s.string(),
    xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
    organization: s.record(s.string(), s.unknown()),
    _keysMap: {
      xPlinth: "x_plinth",
    },
  },
  { additionalProperties: s.json() },
);
