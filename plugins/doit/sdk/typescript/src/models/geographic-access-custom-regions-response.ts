import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  geographicAccessCustomRegionInternalSchema,
  geographicAccessCustomRegionSchema,
  type GeographicAccessCustomRegion,
} from "./geographic-access-custom-region.js";

export type GeographicAccessCustomRegionsResponse = {
  /** Ready custom regions owned by the authenticated tenant. */
  customRegions: GeographicAccessCustomRegion[];
};

const geographicAccessCustomRegionsResponseProperties: s.Shape<GeographicAccessCustomRegionsResponse> = {
  customRegions: s.array(s.lazy(() => geographicAccessCustomRegionInternalSchema)),
};

export const geographicAccessCustomRegionsResponseInternalSchema: Schema<GeographicAccessCustomRegionsResponse> =
  s.object<GeographicAccessCustomRegionsResponse>(geographicAccessCustomRegionsResponseProperties);

export const geographicAccessCustomRegionsResponseSchema: Schema<GeographicAccessCustomRegionsResponse> =
  s.lazySchema(() =>
    s.object<GeographicAccessCustomRegionsResponse>({
      ...geographicAccessCustomRegionsResponseProperties,
      customRegions: s.array(s.lazy(() => geographicAccessCustomRegionSchema)),
    }),
  );
