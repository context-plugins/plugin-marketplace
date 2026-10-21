import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetRelationInfoSchema, type AssetRelationInfo } from "./asset-relation-info.js";

export type AssetRelationsResponse = {
  failed?: AssetRelationInfo[];
  success?: AssetRelationInfo[];
};

export const assetRelationsResponseSchema: Schema<AssetRelationsResponse> = s.object<AssetRelationsResponse>({
  failed: s.optional(s.array(s.lazy(() => assetRelationInfoSchema))),
  success: s.optional(s.array(s.lazy(() => assetRelationInfoSchema))),
});
