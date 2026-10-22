import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Additional information about the employee or team. */
export type AdditionalFieldDefinition = {
  /**
   * Key to reference this field, e.g. "languages". Note that the key should be all lowercase
   * alphabetic characters with no numbers, spaces, hyphens or underscores.
   */
  key?: string;
  /**
   * List of type string or HypertextField.
   *
   * HypertextField is defined as
   * ```
   * {
   *   anchor: string,    // Anchor text for the hypertext field.
   *   hyperlink: string, // URL for the hypertext field.
   * }
   * ```
   * Example: ```{"anchor":"Glean","hyperlink":"https://glean.com"}```
   *
   * When OpenAPI Generator supports oneOf, we will semantically enforce this in the docs.
   *
   * **Note**: If using the Python SDK to pass in a list of strings, the value may need to be a list
   * of dictionaries. In that case, the key in that dictionary will be ignored. Example:
   * ```"languages": [{"lang":"English","lang":"Spanish",...}]```. In this case, the key "lang" will
   * be ignored and can even be passed in as an empty string.
   */
  value?: Record<string, unknown>[];
};

export const additionalFieldDefinitionSchema: Schema<AdditionalFieldDefinition> =
  s.object<AdditionalFieldDefinition>({
    key: s.optional(s.string()),
    value: s.optional(s.array(s.record(s.string(), s.unknown()))),
  });
