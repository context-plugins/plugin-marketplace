import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { annotationValueSchema, type AnnotationValue } from "./annotation-value.js";
import { serviceIdSchema, type ServiceId } from "./service-id.js";

export type ValueWithServiceIds = {
  /** Exactly one member is set. */
  annotationValue?: AnnotationValue;
  /** Services to which the annotation applies. */
  serviceIds?: ServiceId[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueWithServiceIdsSchema: Schema<ValueWithServiceIds> = s.object<ValueWithServiceIds>(
  {
    annotationValue: s.optional(s.lazy(() => annotationValueSchema)),
    serviceIds: s.optional(s.array(s.lazy(() => serviceIdSchema))),
    _keysMap: {
      annotationValue: "AnnotationValue",
      serviceIds: "ServiceIds",
    },
  },
  { additionalProperties: s.json() },
);
