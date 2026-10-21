import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { webhookEventTypesSchema, type WebhookEventTypes } from "../webhook-event-types.js";

export type EventTypes = WebhookEventTypes[] | WebhookEventTypes;

export const eventTypesSchema: Schema<EventTypes> = s.of<EventTypes>(
  s.union([s.array(s.lazy(() => webhookEventTypesSchema)), s.lazy(() => webhookEventTypesSchema)]),
);
