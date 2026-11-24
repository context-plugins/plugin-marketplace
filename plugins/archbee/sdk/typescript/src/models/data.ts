import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type Data = {
  /** access control request id */
  id?: string;
  /** request status */
  status?: Status1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    id: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1Schema)),
  },
  { additionalProperties: s.json() },
);
