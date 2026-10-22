import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCategorySchema, type ErrorCategory } from "./error-category.js";

export type ErrorObject = {
  category?: ErrorCategory;
  code?: string;
  message?: string;
  details?: Record<string, unknown>;
  requestId?: string;
};

export const errorObjectSchema: Schema<ErrorObject> = s.object<ErrorObject>({
  category: s.optional(s.lazy(() => errorCategorySchema)),
  code: s.optional(s.string()),
  message: s.optional(s.string()),
  details: s.optional(s.record(s.string(), s.unknown())),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
