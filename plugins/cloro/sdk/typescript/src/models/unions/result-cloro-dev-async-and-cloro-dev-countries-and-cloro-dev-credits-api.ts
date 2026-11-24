import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { batchTaskFailureResultSchema, type BatchTaskFailureResult } from "../batch-task-failure-result.js";
import {
  batchTaskSuccessResultInternalSchema,
  batchTaskSuccessResultSchema,
  type BatchTaskSuccessResult,
} from "../batch-task-success-result.js";

export type ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi =
  | (BatchTaskSuccessResult & { success: "true" })
  | (BatchTaskFailureResult & { success: "false" });

export const resultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiInternalSchema: Schema<ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi> =
  s.discriminatedUnion<ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi>("success", {
    true: batchTaskSuccessResultInternalSchema,
    false: batchTaskFailureResultSchema,
  });

export const resultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiSchema: Schema<ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi> =
  s.lazySchema(() =>
    s.discriminatedUnion<ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi>("success", {
      true: batchTaskSuccessResultSchema,
      false: batchTaskFailureResultSchema,
    }),
  );
