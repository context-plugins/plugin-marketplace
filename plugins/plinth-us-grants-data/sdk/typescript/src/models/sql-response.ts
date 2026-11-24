import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

/** `truncated` is the one to check: true means the row cap cut the answer, so aggregate in SQL. */
export type SqlResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  rows: Record<string, unknown>[];
  rowCount: number;
  truncated: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlResponseSchema: Schema<SqlResponse> = s.object<SqlResponse>(
  {
    code: s.defaulted(s.int(), 200),
    message: s.string(),
    xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
    rows: s.array(s.record(s.string(), s.unknown())),
    rowCount: s.int(),
    truncated: s.boolean(),
    _keysMap: {
      xPlinth: "x_plinth",
      rowCount: "row_count",
    },
  },
  { additionalProperties: s.json() },
);
