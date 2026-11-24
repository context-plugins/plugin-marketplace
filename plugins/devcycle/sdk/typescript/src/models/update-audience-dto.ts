import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  audienceOperatorInternalSchema,
  audienceOperatorSchema,
  type AudienceOperator,
} from "./audience-operator.js";

export type UpdateAudienceDto = {
  /** Audience display name, must be set for project-level audiences. */
  name?: string;
  /**
   * Audience unique project-level key, must be set for project-level audiences. Must only contain
   * lower-case characters and `_`, `-` or `.`.
   */
  key?: string;
  /** Audience description. */
  description?: string;
  /** Audience filters, describing logic for segmenting users */
  filters?: AudienceOperator;
  /** Tags to organize project-level audiences on the dashboard */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateAudienceDtoProperties: s.Shape<UpdateAudienceDto> = {
  name: s.optional(s.string()),
  key: s.optional(s.string()),
  description: s.optional(s.string()),
  filters: s.optional(s.lazy(() => audienceOperatorInternalSchema)),
  tags: s.optional(s.array(s.string())),
};

export const updateAudienceDtoInternalSchema: Schema<UpdateAudienceDto> = s.object<UpdateAudienceDto>(
  updateAudienceDtoProperties,
  { additionalProperties: s.json() },
);

export const updateAudienceDtoSchema: Schema<UpdateAudienceDto> = s.lazySchema(() =>
  s.object<UpdateAudienceDto>(
    {
      ...updateAudienceDtoProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      key: s.optional(s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$"))),
      description: s.optional(s.string().check(s.maxLength(1000))),
      filters: s.optional(s.lazy(() => audienceOperatorSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
