import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for creating a new field. */
export type CreateFieldRequest = {
  /** The name of the field. */
  name: string;
  /**
   * The type of the field. Some types like formula and autoNumber cannot be created via the API.
   */
  type: string;
  /** A description of the field. */
  description?: string;
  /**
   * Configuration options for the field. Required for some field types like singleSelect and
   * multipleSelects.
   */
  options?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createFieldRequestSchema: Schema<CreateFieldRequest> = s.object<CreateFieldRequest>(
  {
    name: s.string(),
    type: s.string(),
    description: s.optional(s.string()),
    options: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
