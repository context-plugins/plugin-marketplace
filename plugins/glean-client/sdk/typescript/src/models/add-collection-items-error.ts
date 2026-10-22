import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorType1Schema, type ErrorType1 } from "./error-type1.js";

export type AddCollectionItemsError = {
  errorType?: ErrorType1;
};

export const addCollectionItemsErrorSchema: Schema<AddCollectionItemsError> =
  s.object<AddCollectionItemsError>({
    errorType: s.optional(s.lazy(() => errorType1Schema)),
  });
