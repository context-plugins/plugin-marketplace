import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDeliverdDevAudiencesApiSchema,
  type TypeDeliverdDevAudiencesApi,
} from "./type-deliverd-dev-audiences-api.js";

export type Revoked = {
  type: TypeDeliverdDevAudiencesApi;
  id: string | null;
  value?: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const revokedProperties: s.Shape<Revoked> = {
  type: typeDeliverdDevAudiencesApiSchema,
  id: s.nullable(s.string()),
  value: s.optional(s.string()),
  label: s.optional(s.string()),
};

export const revokedInternalSchema: Schema<Revoked> = s.object<Revoked>(revokedProperties, {
  additionalProperties: s.json(),
});

export const revokedSchema: Schema<Revoked> = s.lazySchema(() =>
  s.object<Revoked>(
    {
      ...revokedProperties,
      value: s.optional(s.string().check(s.maxLength(253))),
    },
    { additionalProperties: s.json() },
  ),
);
