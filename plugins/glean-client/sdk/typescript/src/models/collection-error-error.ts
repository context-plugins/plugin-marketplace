import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";

export type CollectionErrorError = {
  errorCode: ErrorCode;
};

export const collectionErrorErrorSchema: Schema<CollectionErrorError> = s.object<CollectionErrorError>({
  errorCode: errorCodeSchema,
});
