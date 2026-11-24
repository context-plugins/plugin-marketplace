import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { method1Schema, type Method1 } from "./method1.js";

/** The HTTP operation config. */
export type GoogleCloudApihubV1HttpOperationConfig1 = {
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

export const googleCloudApihubV1HttpOperationConfig1Schema: Schema<GoogleCloudApihubV1HttpOperationConfig1> =
  s.object<GoogleCloudApihubV1HttpOperationConfig1>(
    {
      spec: s.optional(s.string()),
      path: s.optional(s.string()),
      method: s.optional(s.lazy(() => method1Schema)),
    },
    { additionalProperties: s.json() },
  );
