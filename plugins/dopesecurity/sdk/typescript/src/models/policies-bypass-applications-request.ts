import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data81InternalSchema, data81Schema, type Data81 } from "./unions/data81.js";

export type PoliciesBypassApplicationsRequest = {
  data: Data81;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const policiesBypassApplicationsRequestProperties: s.Shape<PoliciesBypassApplicationsRequest> = {
  data: data81InternalSchema,
};

export const policiesBypassApplicationsRequestInternalSchema: Schema<PoliciesBypassApplicationsRequest> =
  s.object<PoliciesBypassApplicationsRequest>(policiesBypassApplicationsRequestProperties, {
    additionalProperties: s.json(),
  });

export const policiesBypassApplicationsRequestSchema: Schema<PoliciesBypassApplicationsRequest> =
  s.lazySchema(() =>
    s.object<PoliciesBypassApplicationsRequest>(
      {
        ...policiesBypassApplicationsRequestProperties,
        data: data81Schema,
      },
      { additionalProperties: s.json() },
    ),
  );
