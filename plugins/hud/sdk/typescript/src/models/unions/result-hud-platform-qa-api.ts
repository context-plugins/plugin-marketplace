import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  qaCheckResultV1InternalSchema,
  qaCheckResultV1Schema,
  type QaCheckResultV1,
} from "../qa-check-result-v1.js";

export type ResultHudPlatformQaApi = QaCheckResultV1;

export const resultHudPlatformQaApiInternalSchema: Schema<ResultHudPlatformQaApi> =
  s.of<ResultHudPlatformQaApi>(s.union([s.lazy(() => qaCheckResultV1InternalSchema)]));

export const resultHudPlatformQaApiSchema: Schema<ResultHudPlatformQaApi> = s.lazySchema(() =>
  s.of<ResultHudPlatformQaApi>(s.union([s.lazy(() => qaCheckResultV1Schema)])),
);
