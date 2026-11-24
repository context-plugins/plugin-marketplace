import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDeliverdDevAudiencesApiSchema,
  type TypeDeliverdDevAudiencesApi,
} from "./type-deliverd-dev-audiences-api.js";

export type Audience = {
  type: TypeDeliverdDevAudiencesApi;
  id: string | null;
  value?: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const audienceProperties: s.Shape<Audience> = {
  type: typeDeliverdDevAudiencesApiSchema,
  id: s.nullable(s.string()),
  value: s.optional(s.string()),
  label: s.optional(s.string()),
};

export const audienceInternalSchema: Schema<Audience> = s.object<Audience>(audienceProperties, {
  additionalProperties: s.json(),
});

export const audienceSchema: Schema<Audience> = s.lazySchema(() =>
  s.object<Audience>(
    {
      ...audienceProperties,
      value: s.optional(s.string().check(s.maxLength(253))),
    },
    { additionalProperties: s.json() },
  ),
);
