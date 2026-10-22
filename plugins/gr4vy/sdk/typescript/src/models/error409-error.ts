import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";
import { resourceIdSchema, type ResourceId } from "./unions/resource-id.js";

export type Error409Error = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `duplicate_record` @default "duplicate_record" */
  code?: string;
  /** Always `409`. @default 409 */
  status?: number;
  /** A human readable message that provides more context to the error. @default "Generic error" */
  message?: string;
  /** A list of details that further ellaborate on the error. */
  details?: ErrorDetail[];
  /** The ID of the conflicting resource. */
  resourceId?: ResourceId;
};

export const error409ErrorSchema: Schema<Error409Error> = s.object<Error409Error>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "duplicate_record"),
  status: s.defaulted(s.int(), 409),
  message: s.defaulted(s.string(), "Generic error"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
  resourceId: s.optional(s.lazy(() => resourceIdSchema)),
  _keysMap: {
    resourceId: "resource_id",
  },
});
