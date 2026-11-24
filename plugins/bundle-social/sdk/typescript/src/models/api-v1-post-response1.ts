import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataInternalSchema, dataSchema, type Data } from "./data.js";
import { errorsVerboseSchema, type ErrorsVerbose } from "./errors-verbose.js";
import { errorsSchema, type Errors } from "./errors.js";
import { externalDataSchema, type ExternalData } from "./external-data.js";
import { firstCommentSchema, type FirstComment } from "./first-comment.js";
import { statusSchema, type Status } from "./status.js";

export type ApiV1PostResponse1 = {
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
  firstComment?: FirstComment | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PostResponse1Properties: s.Shape<ApiV1PostResponse1> = {
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
  firstComment: s.optionalNullable(s.lazy(() => firstCommentSchema)),
};

export const apiV1PostResponse1InternalSchema: Schema<ApiV1PostResponse1> = s.object<ApiV1PostResponse1>(
  apiV1PostResponse1Properties,
  { additionalProperties: s.json() },
);

export const apiV1PostResponse1Schema: Schema<ApiV1PostResponse1> = s.lazySchema(() =>
  s.object<ApiV1PostResponse1>(
    {
      ...apiV1PostResponse1Properties,
      data: dataSchema,
    },
    { additionalProperties: s.json() },
  ),
);
