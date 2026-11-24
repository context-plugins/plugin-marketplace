import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataInternalSchema, dataSchema, type Data } from "./data.js";
import { errorsVerboseSchema, type ErrorsVerbose } from "./errors-verbose.js";
import { errorsSchema, type Errors } from "./errors.js";
import { externalDataSchema, type ExternalData } from "./external-data.js";
import {
  socialAccountBundleSocialPostApiSchema,
  type SocialAccountBundleSocialPostApi,
} from "./social-account-bundle-social-post-api.js";
import { statusSchema, type Status } from "./status.js";
import { uploadInternalSchema, uploadSchema, type Upload } from "./upload.js";

export type Item1BundleSocialPostApi = {
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
  uploads: Upload[];
  socialAccounts: SocialAccountBundleSocialPostApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const item1BundleSocialPostApiProperties: s.Shape<Item1BundleSocialPostApi> = {
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
  uploads: s.array(s.lazy(() => uploadInternalSchema)),
  socialAccounts: s.array(s.lazy(() => socialAccountBundleSocialPostApiSchema)),
};

export const item1BundleSocialPostApiInternalSchema: Schema<Item1BundleSocialPostApi> =
  s.object<Item1BundleSocialPostApi>(item1BundleSocialPostApiProperties, { additionalProperties: s.json() });

export const item1BundleSocialPostApiSchema: Schema<Item1BundleSocialPostApi> = s.lazySchema(() =>
  s.object<Item1BundleSocialPostApi>(
    {
      ...item1BundleSocialPostApiProperties,
      data: dataSchema,
      uploads: s.array(s.lazy(() => uploadSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
