import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataSemrushPartnerServiceApiInternalSchema,
  dataSemrushPartnerServiceApiSchema,
  type DataSemrushPartnerServiceApi,
} from "./data-semrush-partner-service-api.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

/** Viewer Status response object */
export type ViewerStatusResponse = {
  /** Response metadata */
  meta?: ResponseMeta;
  /** An object describes user status, related to the app */
  data?: DataSemrushPartnerServiceApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const viewerStatusResponseProperties: s.Shape<ViewerStatusResponse> = {
  meta: s.optional(s.lazy(() => responseMetaSchema)),
  data: s.optional(s.lazy(() => dataSemrushPartnerServiceApiInternalSchema)),
};

export const viewerStatusResponseInternalSchema: Schema<ViewerStatusResponse> =
  s.object<ViewerStatusResponse>(viewerStatusResponseProperties, { additionalProperties: s.json() });

export const viewerStatusResponseSchema: Schema<ViewerStatusResponse> = s.lazySchema(() =>
  s.object<ViewerStatusResponse>(
    {
      ...viewerStatusResponseProperties,
      data: s.optional(s.lazy(() => dataSemrushPartnerServiceApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
