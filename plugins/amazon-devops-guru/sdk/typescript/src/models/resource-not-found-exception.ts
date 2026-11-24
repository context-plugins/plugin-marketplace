import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourceNotFoundException = {
  message: string;
  /** The ID of the Amazon Web Services resource that could not be found. */
  resourceId: string;
  /** The type of the Amazon Web Services resource that could not be found. */
  resourceType: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceNotFoundExceptionSchema: Schema<ResourceNotFoundException> =
  s.object<ResourceNotFoundException>(
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
