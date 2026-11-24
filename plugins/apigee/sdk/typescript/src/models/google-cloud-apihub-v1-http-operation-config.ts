import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { method1Schema, type Method1 } from "./method1.js";

/** Identifies a single API Hub operation by spec resource name + HTTP path + HTTP method. */
export type GoogleCloudApihubV1HttpOperationConfig = {
  /**
   * Required. Spec resource name:
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`
   */
  spec?: string;
  /**
   * Required. HTTP path of the operation within the referenced spec. Match is exact (no template
   * substitution): the path here must appear verbatim on an APIOperationRevision belonging to the
   * spec.
   */
  path?: string;
  /**
   * Required. HTTP method of the operation within the referenced spec. (GET / PUT / POST / DELETE /
   * OPTIONS / HEAD / PATCH / TRACE).
   */
  method?: Method1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1HttpOperationConfigSchema: Schema<GoogleCloudApihubV1HttpOperationConfig> =
  s.object<GoogleCloudApihubV1HttpOperationConfig>(
    {
      spec: s.optional(s.string()),
      path: s.optional(s.string()),
      method: s.optional(s.lazy(() => method1Schema)),
    },
    { additionalProperties: s.json() },
  );
