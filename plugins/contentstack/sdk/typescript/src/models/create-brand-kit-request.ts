import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for creating or updating a Brand Kit. */
export type CreateBrandKitRequest = {
  /** Display name for the Brand Kit. */
  name: string;
  /** Description of the Brand Kit's purpose. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBrandKitRequestSchema: Schema<CreateBrandKitRequest> = s.object<CreateBrandKitRequest>(
  {
    name: s.string(),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
