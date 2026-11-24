import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventContractSchema, type EventContract } from "./event-contract.js";

export type EventsContractsResponse = {
  data: EventContract[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsContractsResponseSchema: Schema<EventsContractsResponse> =
  s.object<EventsContractsResponse>(
    {
      data: s.array(s.lazy(() => eventContractSchema)),
    },
    { additionalProperties: s.json() },
  );
