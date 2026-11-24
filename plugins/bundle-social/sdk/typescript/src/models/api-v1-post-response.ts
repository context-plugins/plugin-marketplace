import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataInternalSchema, dataSchema, type Data } from "./data.js";
import { errorsVerboseSchema, type ErrorsVerbose } from "./errors-verbose.js";
import { errorsSchema, type Errors } from "./errors.js";
import { externalDataSchema, type ExternalData } from "./external-data.js";
import { firstCommentSchema, type FirstComment } from "./first-comment.js";
import {
  socialAccountBundleSocialPostApiSchema,
  type SocialAccountBundleSocialPostApi,
} from "./social-account-bundle-social-post-api.js";
import { statusSchema, type Status } from "./status.js";
import { uploadInternalSchema, uploadSchema, type Upload } from "./upload.js";

export type ApiV1PostResponse = {
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
  uploads: Upload[];
  socialAccounts: SocialAccountBundleSocialPostApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PostResponseProperties: s.Shape<ApiV1PostResponse> = {
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
  uploads: s.array(s.lazy(() => uploadInternalSchema)),
  socialAccounts: s.array(s.lazy(() => socialAccountBundleSocialPostApiSchema)),
};

export const apiV1PostResponseInternalSchema: Schema<ApiV1PostResponse> = s.object<ApiV1PostResponse>(
  apiV1PostResponseProperties,
  { additionalProperties: s.json() },
);

export const apiV1PostResponseSchema: Schema<ApiV1PostResponse> = s.lazySchema(() =>
  s.object<ApiV1PostResponse>(
    {
      ...apiV1PostResponseProperties,
      data: dataSchema,
      uploads: s.array(s.lazy(() => uploadSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
