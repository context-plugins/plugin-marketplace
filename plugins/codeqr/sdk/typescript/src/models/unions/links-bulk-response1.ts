import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  linkCodeqrIoLinksApiInternalSchema,
  linkCodeqrIoLinksApiSchema,
  type LinkCodeqrIoLinksApi,
} from "../link-codeqr-io-links-api.js";
import { linkErrorSchema, type LinkError } from "../link-error.js";

export type LinksBulkResponse1 = LinkCodeqrIoLinksApi | LinkError;

export const linksBulkResponse1InternalSchema: Schema<LinksBulkResponse1> = s.of<LinksBulkResponse1>(
  s.union([s.lazy(() => linkCodeqrIoLinksApiInternalSchema), s.lazy(() => linkErrorSchema)]),
);

export const linksBulkResponse1Schema: Schema<LinksBulkResponse1> = s.lazySchema(() =>
  s.of<LinksBulkResponse1>(
    s.union([s.lazy(() => linkCodeqrIoLinksApiSchema), s.lazy(() => linkErrorSchema)]),
  ),
);
