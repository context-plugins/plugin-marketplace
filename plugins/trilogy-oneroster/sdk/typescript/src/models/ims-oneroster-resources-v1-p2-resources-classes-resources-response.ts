import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceSchema, type Resource } from "./resource.js";

export type ImsOnerosterResourcesV1P2ResourcesClassesResourcesResponse = {
  resources: Resource[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterResourcesV1P2ResourcesClassesResourcesResponseSchema: Schema<ImsOnerosterResourcesV1P2ResourcesClassesResourcesResponse> =
  s.object<ImsOnerosterResourcesV1P2ResourcesClassesResourcesResponse>({
    resources: s.array(s.lazy(() => resourceSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
