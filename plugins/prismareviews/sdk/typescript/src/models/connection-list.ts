import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionSchema, type Connection } from "./connection.js";

export type ConnectionList = {
  data: Connection[];
  /** Always `null`: not paginated. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionListSchema: Schema<ConnectionList> = s.object<ConnectionList>(
  {
    data: s.array(s.lazy(() => connectionSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
