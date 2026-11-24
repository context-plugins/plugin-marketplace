import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDeliverdDevAudiencesApiSchema,
  type TypeDeliverdDevAudiencesApi,
} from "./type-deliverd-dev-audiences-api.js";

export type Principal = {
  type: TypeDeliverdDevAudiencesApi;
  id: string | null;
  value?: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const principalProperties: s.Shape<Principal> = {
  type: typeDeliverdDevAudiencesApiSchema,
  id: s.nullable(s.string()),
  value: s.optional(s.string()),
  label: s.optional(s.string()),
};

export const principalInternalSchema: Schema<Principal> = s.object<Principal>(principalProperties, {
  additionalProperties: s.json(),
});

export const principalSchema: Schema<Principal> = s.lazySchema(() =>
  s.object<Principal>(
    {
      ...principalProperties,
      value: s.optional(s.string().check(s.maxLength(253))),
    },
    { additionalProperties: s.json() },
  ),
);
