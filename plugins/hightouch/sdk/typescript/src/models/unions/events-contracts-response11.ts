import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { eventContractUpdateSchema, type EventContractUpdate } from "../event-contract-update.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type EventsContractsResponse11 = EventContractUpdate | ValidateErrorJson | InternalServerError;

export const eventsContractsResponse11Schema: Schema<EventsContractsResponse11> =
  s.of<EventsContractsResponse11>(
    s.union([
      s.lazy(() => eventContractUpdateSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
