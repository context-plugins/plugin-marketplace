import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type AssetRelationInfo = {
  /** The message indicating the result of the operation. */
  message?: string;
  /** The code indicating the result of the operation. */
  code?: Code;
  /** The identifier of the asset, either asset ID or public ID path. */
  asset?: string;
  /** The HTTP status code indicating the result of the operation. */
  status?: number;
};

export const assetRelationInfoSchema: Schema<AssetRelationInfo> = s.object<AssetRelationInfo>({
  message: s.optional(s.string()),
  code: s.optional(s.lazy(() => codeSchema)),
  asset: s.optional(s.string()),
  status: s.optional(s.int()),
});
