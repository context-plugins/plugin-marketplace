import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iProductResultSchema, type IProductResult } from "./iproduct-result.js";

export type ISimpleListResultOfIProductResult = {
  list?: IProductResult[] | null;
};

export const iSimpleListResultOfIProductResultSchema: Schema<ISimpleListResultOfIProductResult> =
  s.object<ISimpleListResultOfIProductResult>({
    list: s.optionalNullable(s.array(s.lazy(() => iProductResultSchema))),
  });
