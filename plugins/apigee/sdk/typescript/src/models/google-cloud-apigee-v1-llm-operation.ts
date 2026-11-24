import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Represents the pairing of REST resource path, model and the actions (verbs) allowed on the
 * resource path.
 */
export type GoogleCloudApigeeV1LlmOperation = {
  /** Required. LLM model name associated with the API proxy */
  model?: string;
  /** Required. REST resource path associated with the API proxy or remote service. */
  resource?: string;
  /**
   * Optional. methods refers to the REST verbs as in https://httpwg.org/specs/rfc9110.html For
   * example: GET, POST, PUT, DELETE, etc. They need to be in uppercase. When none specified, all
   * verb types are allowed.
   */
  methods?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1LlmOperationSchema: Schema<GoogleCloudApigeeV1LlmOperation> =
  s.object<GoogleCloudApigeeV1LlmOperation>(
    {
      model: s.optional(s.string()),
      resource: s.optional(s.string()),
      methods: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
