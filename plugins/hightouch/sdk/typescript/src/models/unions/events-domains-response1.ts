import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { eventDomainSchema, type EventDomain } from "../event-domain.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type EventsDomainsResponse1 = EventDomain | ValidateErrorJson | InternalServerError;

export const eventsDomainsResponse1Schema: Schema<EventsDomainsResponse1> = s.of<EventsDomainsResponse1>(
  s.union([
    s.lazy(() => eventDomainSchema),
    s.lazy(() => validateErrorJsonSchema),
    s.lazy(() => internalServerErrorSchema),
  ]),
);
