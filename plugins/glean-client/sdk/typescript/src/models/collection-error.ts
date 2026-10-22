import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";

export type CollectionError = {
  errorCode: ErrorCode;
};

export const collectionErrorSchema: Schema<CollectionError> = s.object<CollectionError>({
  errorCode: errorCodeSchema,
});
