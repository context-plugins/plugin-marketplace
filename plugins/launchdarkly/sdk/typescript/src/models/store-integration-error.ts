import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoreIntegrationError = {
  statusCode?: number;
  message?: string;
  timestamp?: number;
};

export const storeIntegrationErrorSchema: Schema<StoreIntegrationError> = s.object<StoreIntegrationError>({
  statusCode: s.optional(s.int()),
  message: s.optional(s.string()),
  timestamp: s.optional(s.int()),
});
