import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  audienceOperatorInternalSchema,
  audienceOperatorSchema,
  type AudienceOperator,
} from "./audience-operator.js";
import { sourceSchema, type Source } from "./source.js";

export type Audience = {
  /** Audience display name, must be set for project-level audiences. */
  name?: string;
  /**
   * Audience unique project-level key, must be set for project-level audiences. Must only contain
   * lower-case characters and `_`, `-` or `.`.
   */
  key?: string;
  /** Audience description. */
  description?: string;
  /** A unique Audience ID */
  id: string;
  /** The Project owning the Audience */
  project: string;
  /** Audience filters, describing logic for segmenting users */
  filters: AudienceOperator;
  /** Source that created the Audience */
  source?: Source;
  /** User who created the Audience */
  createdBy?: string;
  /** The date the feature was created */
  createdAt: Date;
  /** The date the feature was last updated */
  updatedAt: Date;
  /** Tags to organize project-level audiences on the dashboard */
  tags?: string[];
  /** Readonly state based on the Users Permission to modify the Audience */
  readonly: boolean;
  /** Whether the audience is in use by a feature */
  hasUsage?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const audienceProperties: s.Shape<Audience> = {
  name: s.optional(s.string()),
  key: s.optional(s.string()),
  description: s.optional(s.string()),
  id: s.string(),
  project: s.string(),
  filters: audienceOperatorInternalSchema,
  source: s.optional(s.lazy(() => sourceSchema)),
  createdBy: s.optional(s.string()),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  tags: s.optional(s.array(s.string())),
  readonly: s.boolean(),
  hasUsage: s.optional(s.boolean()),
  _keysMap: {
    id: "_id",
    project: "_project",
    createdBy: "_createdBy",
  },
};

export const audienceInternalSchema: Schema<Audience> = s.object<Audience>(audienceProperties, {
  additionalProperties: s.json(),
});

export const audienceSchema: Schema<Audience> = s.lazySchema(() =>
  s.object<Audience>(
    {
      ...audienceProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      key: s.optional(s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$"))),
      description: s.optional(s.string().check(s.maxLength(1000))),
      filters: audienceOperatorSchema,
    },
    { additionalProperties: s.json() },
  ),
);
