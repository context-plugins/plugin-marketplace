import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { defaultSamplingParamsSchema, type DefaultSamplingParams } from "../default-sampling-params.js";

/** Default sampling parameters applied at inference time when the request does not specify them. */
export type DefaultParams = DefaultSamplingParams;

export const defaultParamsSchema: Schema<DefaultParams> = s.of<DefaultParams>(
  s.union([s.lazy(() => defaultSamplingParamsSchema)]),
);
