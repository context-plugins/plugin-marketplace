import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The value that can be assigned to the attribute when the data type is enum. */
export type GoogleCloudApihubV1AllowedValue = {
  /** Optional. The detailed description of the allowed value. */
  description?: string;
  /**
   * Optional. When set to true, the allowed value cannot be updated or deleted by the user. It can
   * only be true for System defined attributes.
   */
  immutable?: boolean;
  /**
   * Required. The ID of the allowed value. * If provided, the same will be used. The service will
   * throw an error if the specified id is already used by another allowed value in the same
   * attribute resource. * If not provided, a system generated id derived from the display name will
   * be used. In this case, the service will handle conflict resolution by adding a system generated
   * suffix in case of duplicates. This value should be 3-500 characters, and valid characters are
   * /a-z[0-9]-_/.
   */
  id?: string;
  /** Required. The display name of the allowed value. */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AllowedValueSchema: Schema<GoogleCloudApihubV1AllowedValue> =
  s.object<GoogleCloudApihubV1AllowedValue>(
    {
      description: s.optional(s.string()),
      immutable: s.optional(s.boolean()),
      id: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
