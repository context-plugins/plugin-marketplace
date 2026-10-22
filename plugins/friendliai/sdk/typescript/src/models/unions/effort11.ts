import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { effortSchema, type Effort } from "../effort.js";

/**
 * Constrains effort on reasoning for reasoning models. Currently supported values are `minimal`,
 * `low`, `medium`, `high`, `xhigh`, `max`, and `ultracode`. Reducing reasoning effort can result in
 * faster responses and fewer tokens used on reasoning in a response.
 */
export type Effort11 = Effort;

export const effort11Schema: Schema<Effort11> = s.of<Effort11>(s.union([s.lazy(() => effortSchema)]));
