import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { getUserConnectionDataSchema, type GetUserConnectionData } from "./get-user-connection-data.js";

/** Container object containing connection data. */
export type UserGetConnection = {
  /** Always "list". */
  type: string;
  /** Count of accounts. */
  count: number;
  /** Connections data. */
  data: GetUserConnectionData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userGetConnectionSchema: Schema<UserGetConnection> = s.object<UserGetConnection>(
  {
    type: s.string(),
    count: s.int(),
    data: s.array(s.lazy(() => getUserConnectionDataSchema)),
  },
  { additionalProperties: s.json() },
);
