import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { eventContractSchema, type EventContract } from "../event-contract.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type EventsContractsResponse1 = EventContract | ValidateErrorJson | InternalServerError;

export const eventsContractsResponse1Schema: Schema<EventsContractsResponse1> =
  s.of<EventsContractsResponse1>(
    s.union([
      s.lazy(() => eventContractSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
