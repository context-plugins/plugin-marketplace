import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataBundleSocialCommentApiSchema,
  type DataBundleSocialCommentApi,
} from "./data-bundle-social-comment-api.js";
import {
  errorsBundleSocialCommentApiSchema,
  type ErrorsBundleSocialCommentApi,
} from "./errors-bundle-social-comment-api.js";
import {
  errorsVerboseBundleSocialCommentApiSchema,
  type ErrorsVerboseBundleSocialCommentApi,
} from "./errors-verbose-bundle-social-comment-api.js";
import {
  externalDataBundleSocialCommentApiSchema,
  type ExternalDataBundleSocialCommentApi,
} from "./external-data-bundle-social-comment-api.js";
import { status4Schema, type Status4 } from "./status4.js";

export type Item2BundleSocialCommentApi = {
  id: string;
  teamId: string;
  organizationId?: string | null;
  internalPostId?: string | null;
  importedPostId?: string | null;
  internalParentCommentId?: string | null;
  fetchedParentCommentId?: string | null;
  title?: string | null;
  postDate?: Date | null;
  postedDate?: Date | null;
  status: Status4;
  data: DataBundleSocialCommentApi;
  error?: string | null;
  errors?: ErrorsBundleSocialCommentApi | null;
  errorsVerbose?: ErrorsVerboseBundleSocialCommentApi | null;
  externalData?: ExternalDataBundleSocialCommentApi | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item2BundleSocialCommentApiSchema: Schema<Item2BundleSocialCommentApi> =
  s.object<Item2BundleSocialCommentApi>(
    {
      id: s.string(),
      teamId: s.string(),
      organizationId: s.optionalNullable(s.string()),
      internalPostId: s.optionalNullable(s.string()),
      importedPostId: s.optionalNullable(s.string()),
      internalParentCommentId: s.optionalNullable(s.string()),
      fetchedParentCommentId: s.optionalNullable(s.string()),
      title: s.optionalNullable(s.string()),
      postDate: s.optionalNullable(s.dateTime()),
      postedDate: s.optionalNullable(s.dateTime()),
      status: status4Schema,
      data: dataBundleSocialCommentApiSchema,
      error: s.optionalNullable(s.string()),
      errors: s.optionalNullable(s.lazy(() => errorsBundleSocialCommentApiSchema)),
      errorsVerbose: s.optionalNullable(s.lazy(() => errorsVerboseBundleSocialCommentApiSchema)),
      externalData: s.optionalNullable(s.lazy(() => externalDataBundleSocialCommentApiSchema)),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      deletedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
