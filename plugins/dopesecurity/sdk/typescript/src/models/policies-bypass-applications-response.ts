import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data7InternalSchema, data7Schema, type Data7 } from "./data7.js";

export type PoliciesBypassApplicationsResponse = {
  data: Data7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const policiesBypassApplicationsResponseProperties: s.Shape<PoliciesBypassApplicationsResponse> = {
  data: data7InternalSchema,
};

export const policiesBypassApplicationsResponseInternalSchema: Schema<PoliciesBypassApplicationsResponse> =
  s.object<PoliciesBypassApplicationsResponse>(policiesBypassApplicationsResponseProperties, {
    additionalProperties: s.json(),
  });

export const policiesBypassApplicationsResponseSchema: Schema<PoliciesBypassApplicationsResponse> =
  s.lazySchema(() =>
    s.object<PoliciesBypassApplicationsResponse>(
      {
        ...policiesBypassApplicationsResponseProperties,
        data: data7Schema,
      },
      { additionalProperties: s.json() },
    ),
  );
