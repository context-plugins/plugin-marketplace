import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataInternalSchema, dataSchema, type Data } from "./data.js";
import { errorsVerboseSchema, type ErrorsVerbose } from "./errors-verbose.js";
import { errorsSchema, type Errors } from "./errors.js";
import { externalDataSchema, type ExternalData } from "./external-data.js";
import { statusSchema, type Status } from "./status.js";

export type Post = {
  id: string;
  teamId: string;
  organizationId?: string | null;
  title: string;
  referenceKey?: string | null;
  postDate: Date | null;
  postedDate?: Date | null;
  status: Status;
  data: Data;
  error?: string | null;
  errors?: Errors | null;
  errorsVerbose?: ErrorsVerbose | null;
  externalData?: ExternalData | null;
  retryCount: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const postProperties: s.Shape<Post> = {
  id: s.string(),
  teamId: s.string(),
  organizationId: s.optionalNullable(s.string()),
  title: s.string(),
  referenceKey: s.optionalNullable(s.string()),
  postDate: s.nullable(s.dateTime()),
  postedDate: s.optionalNullable(s.dateTime()),
  status: statusSchema,
  data: dataInternalSchema,
  error: s.optionalNullable(s.string()),
  errors: s.optionalNullable(s.lazy(() => errorsSchema)),
  errorsVerbose: s.optionalNullable(s.lazy(() => errorsVerboseSchema)),
  externalData: s.optionalNullable(s.lazy(() => externalDataSchema)),
  retryCount: s.float64(),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
  deletedAt: s.optionalNullable(s.dateTime()),
};

export const postInternalSchema: Schema<Post> = s.object<Post>(postProperties, {
  additionalProperties: s.json(),
});

export const postSchema: Schema<Post> = s.lazySchema(() =>
  s.object<Post>(
    {
      ...postProperties,
      data: dataSchema,
    },
    { additionalProperties: s.json() },
  ),
);
