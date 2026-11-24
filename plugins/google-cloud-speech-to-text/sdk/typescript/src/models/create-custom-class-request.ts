import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customClass2Schema, type CustomClass2 } from "./custom-class2.js";

/** Message sent by the client for the `CreateCustomClass` method. */
export type CreateCustomClassRequest = {
  /** Required. The custom class to create. */
  customClass?: CustomClass2;
  /**
   * Required. The ID to use for the custom class, which will become the final component of the
   * custom class' resource name. This value should restrict to letters, numbers, and hyphens, with
   * the first character a letter, the last a letter or a number, and be 4-63 characters.
   */
  customClassId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCustomClassRequestSchema: Schema<CreateCustomClassRequest> =
  s.object<CreateCustomClassRequest>(
    {
      customClass: s.optional(s.lazy(() => customClass2Schema)),
      customClassId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
