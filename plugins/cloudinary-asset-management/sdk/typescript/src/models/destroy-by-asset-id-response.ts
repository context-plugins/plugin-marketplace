import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { result1Schema, type Result1 } from "./result1.js";

export type DestroyByAssetIdResponse = {
  /** The result of the deletion operation. */
  result: Result1;
};

export const destroyByAssetIdResponseSchema: Schema<DestroyByAssetIdResponse> =
  s.object<DestroyByAssetIdResponse>({
    result: result1Schema,
  });
