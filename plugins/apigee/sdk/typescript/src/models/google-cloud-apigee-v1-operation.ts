import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Represents the pairing of REST resource path and the actions (verbs) allowed on the resource
 * path.
 */
export type GoogleCloudApigeeV1Operation = {
  /** Required. REST resource path associated with the API proxy or remote service. */
  resource?: string;
  /**
   * methods refers to the REST verbs as in https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html.
   * When none specified, all verb types are allowed.
   */
  methods?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1OperationSchema: Schema<GoogleCloudApigeeV1Operation> =
  s.object<GoogleCloudApigeeV1Operation>(
    {
      resource: s.optional(s.string()),
      methods: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
