import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { docsSchema, type Docs } from "./docs.js";

/** Response Data */
export type Data2 = {
  /** Search session id, can be used as input for next search calls. */
  searchSessionId?: string;
  /** Array of Doc responses */
  docs?: Docs;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data2Schema: Schema<Data2> = s.object<Data2>(
  {
    searchSessionId: s.optional(s.string()),
    docs: s.optional(s.lazy(() => docsSchema)),
  },
  { additionalProperties: s.json() },
);
