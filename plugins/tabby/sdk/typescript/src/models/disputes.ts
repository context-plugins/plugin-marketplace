import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disputeNoHistorySchema, type DisputeNoHistory } from "./dispute-no-history.js";

export type Disputes = {
  disputes: DisputeNoHistory[];
  nextPageToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputesSchema: Schema<Disputes> = s.object<Disputes>(
  {
    disputes: s.array(s.lazy(() => disputeNoHistorySchema)),
    nextPageToken: s.string(),
    _keysMap: {
      nextPageToken: "next_page_token",
    },
  },
  { additionalProperties: s.json() },
);
