import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attribute1InternalSchema, attribute1Schema, type Attribute1 } from "./attribute1.js";

export type ApiV1MiscGoogleBusinessLocationAttributesRequest = {
  teamId: string;
  attributeMask?: string;
  attributes?: Attribute1[] | null;
};

const apiV1MiscGoogleBusinessLocationAttributesRequestProperties: s.Shape<ApiV1MiscGoogleBusinessLocationAttributesRequest> =
  {
    teamId: s.string(),
    attributeMask: s.optional(s.string()),
    attributes: s.optionalNullable(s.array(s.lazy(() => attribute1InternalSchema))),
  };

export const apiV1MiscGoogleBusinessLocationAttributesRequestInternalSchema: Schema<ApiV1MiscGoogleBusinessLocationAttributesRequest> =
  s.object<ApiV1MiscGoogleBusinessLocationAttributesRequest>(
    apiV1MiscGoogleBusinessLocationAttributesRequestProperties,
  );

export const apiV1MiscGoogleBusinessLocationAttributesRequestSchema: Schema<ApiV1MiscGoogleBusinessLocationAttributesRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessLocationAttributesRequest>({
      ...apiV1MiscGoogleBusinessLocationAttributesRequestProperties,
      attributes: s.optionalNullable(s.array(s.lazy(() => attribute1Schema))),
    }),
  );
