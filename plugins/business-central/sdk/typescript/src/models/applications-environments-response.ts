import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentInternalSchema, environmentSchema, type Environment } from "./environment.js";

export type ApplicationsEnvironmentsResponse = {
  value?: Environment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const applicationsEnvironmentsResponseProperties: s.Shape<ApplicationsEnvironmentsResponse> = {
  value: s.optional(s.array(s.lazy(() => environmentInternalSchema))),
};

export const applicationsEnvironmentsResponseInternalSchema: Schema<ApplicationsEnvironmentsResponse> =
  s.object<ApplicationsEnvironmentsResponse>(applicationsEnvironmentsResponseProperties, {
    additionalProperties: s.json(),
  });

export const applicationsEnvironmentsResponseSchema: Schema<ApplicationsEnvironmentsResponse> = s.lazySchema(
  () =>
    s.object<ApplicationsEnvironmentsResponse>(
      {
        ...applicationsEnvironmentsResponseProperties,
        value: s.optional(s.array(s.lazy(() => environmentSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
