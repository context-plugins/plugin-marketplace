import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type LimitsResponse = {
  limits?: LimitsObject | null;
};

export const limitsResponseSchema: Schema<LimitsResponse> = s.object<LimitsResponse>({
  limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
});
