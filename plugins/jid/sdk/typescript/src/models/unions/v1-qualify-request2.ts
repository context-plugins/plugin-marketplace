import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v1QualifyRequestInternalSchema,
  v1QualifyRequestSchema,
  type V1QualifyRequest,
} from "../v1-qualify-request.js";
import {
  v1QualifyRequest1InternalSchema,
  v1QualifyRequest1Schema,
  type V1QualifyRequest1,
} from "../v1-qualify-request1.js";

export type V1QualifyRequest2 = V1QualifyRequest | V1QualifyRequest1;

export const v1QualifyRequest2InternalSchema: Schema<V1QualifyRequest2> = s.of<V1QualifyRequest2>(
  s.union([s.lazy(() => v1QualifyRequestInternalSchema), s.lazy(() => v1QualifyRequest1InternalSchema)]),
);

export const v1QualifyRequest2Schema: Schema<V1QualifyRequest2> = s.lazySchema(() =>
  s.of<V1QualifyRequest2>(
    s.union([s.lazy(() => v1QualifyRequestSchema), s.lazy(() => v1QualifyRequest1Schema)]),
  ),
);
