import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConflictException = {
  message: string;
  /** The ID of the Amazon Web Services resource in which a conflict occurred. */
  resourceId: string;
  /** The type of the Amazon Web Services resource in which a conflict occurred. */
  resourceType: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conflictExceptionSchema: Schema<ConflictException> = s.object<ConflictException>(
  {
    message: s.string(),
    resourceId: s.string(),
    resourceType: s.string(),
    _keysMap: {
      message: "Message",
      resourceId: "ResourceId",
      resourceType: "ResourceType",
    },
  },
  { additionalProperties: s.json() },
);
