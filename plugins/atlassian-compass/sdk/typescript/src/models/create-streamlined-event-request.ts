import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compassEventInputDtoSchema, type CompassEventInputDto } from "./compass-event-input-dto.js";

export type CreateStreamlinedEventRequest = {
  cloudId: string;
  /** The type of event. One and only one of the fields in this input type must be provided. */
  event: CompassEventInputDto;
  componentId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createStreamlinedEventRequestSchema: Schema<CreateStreamlinedEventRequest> =
  s.object<CreateStreamlinedEventRequest>(
    {
      cloudId: s.string(),
      event: compassEventInputDtoSchema,
      componentId: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
