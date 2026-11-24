import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  iSimpleListResultOfIProductResultSchema,
  type ISimpleListResultOfIProductResult,
} from "./isimple-list-result-of-iproduct-result.js";

export type ApiResponseOfISimpleListResultOfIProductResult = {
  status?: boolean;
  message?: string | null;
  code?: number;
  data?: ISimpleListResultOfIProductResult;
};

export const apiResponseOfISimpleListResultOfIProductResultSchema: Schema<ApiResponseOfISimpleListResultOfIProductResult> =
  s.object<ApiResponseOfISimpleListResultOfIProductResult>({
    status: s.optional(s.boolean()),
    message: s.optionalNullable(s.string()),
    code: s.optional(s.int()),
    data: s.optional(s.lazy(() => iSimpleListResultOfIProductResultSchema)),
  });
