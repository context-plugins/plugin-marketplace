import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rcaAssetTypeDtoSchema, type RcaAssetTypeDto } from "./rca-asset-type-dto.js";

export type PublicApiBlastRadiusDto = {
  assetType?: RcaAssetTypeDto;
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiBlastRadiusDtoSchema: Schema<PublicApiBlastRadiusDto> =
  s.object<PublicApiBlastRadiusDto>(
    {
      assetType: s.optional(s.lazy(() => rcaAssetTypeDtoSchema)),
      count: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
