import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { onSchemaViolationSchema, type OnSchemaViolation } from "./on-schema-violation.js";
import { onUndeclaredFieldsSchema, type OnUndeclaredFields } from "./on-undeclared-fields.js";
import { typeSchema, type Type } from "./type.js";

export type Event = {
  /** The JSON schema that validates the event. Required. May contain component `$ref`s. */
  schema: Record<string, unknown>;
  /**
   * What happens to events that contain fields not in the schema. One of ALLOW_EVENT, BLOCK_EVENT,
   * or OMIT_FIELDS. Optional, defaults to OMIT_FIELDS.
   */
  onUndeclaredFields?: OnUndeclaredFields;
  /**
   * What happens to events that violate the schema. One of ALLOW_EVENT or BLOCK_EVENT. Optional,
   * defaults to BLOCK_EVENT.
   */
  onSchemaViolation?: OnSchemaViolation;
  /** The event version. Defaults to "default", optional. You probably don't need to set this. */
  version?: string;
  /** The event's slug. If not specified, one will be generated. */
  slug?: string;
  /** The event's name. Required for track events. */
  name?: string;
  /** The event's type. One of track, identify, page, screen, or group. Required. */
  type: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSchema: Schema<Event> = s.object<Event>(
  {
    schema: s.record(s.string(), s.unknown()),
    onUndeclaredFields: s.optional(s.lazy(() => onUndeclaredFieldsSchema)),
    onSchemaViolation: s.optional(s.lazy(() => onSchemaViolationSchema)),
    version: s.optional(s.string()),
    slug: s.optional(s.string()),
    name: s.optional(s.string()),
    type: typeSchema,
  },
  { additionalProperties: s.json() },
);
