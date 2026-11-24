import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDeliverdDevAudiencesApiSchema,
  type TypeDeliverdDevAudiencesApi,
} from "./type-deliverd-dev-audiences-api.js";

export type Granted = {
  type: TypeDeliverdDevAudiencesApi;
  id: string | null;
  value?: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const grantedProperties: s.Shape<Granted> = {
  type: typeDeliverdDevAudiencesApiSchema,
  id: s.nullable(s.string()),
  value: s.optional(s.string()),
  label: s.optional(s.string()),
};

export const grantedInternalSchema: Schema<Granted> = s.object<Granted>(grantedProperties, {
  additionalProperties: s.json(),
});

export const grantedSchema: Schema<Granted> = s.lazySchema(() =>
  s.object<Granted>(
    {
      ...grantedProperties,
      value: s.optional(s.string().check(s.maxLength(253))),
    },
    { additionalProperties: s.json() },
  ),
);
