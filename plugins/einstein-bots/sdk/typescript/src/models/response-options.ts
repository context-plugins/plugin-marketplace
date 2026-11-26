import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responseOptionsVariablesSchema,
  type ResponseOptionsVariables,
} from "./response-options-variables.js";

/** Configuration of additional information returned in the response payload. */
export type ResponseOptions = {
  /** Variables returned in the response. */
  variables?: ResponseOptionsVariables;
  /** Indicates whether to include metrics in the response. */
  metrics?: boolean;
  /** Indicates whether to include all intents detected when processing the current request. */
  intents?: boolean;
  /** Indicates whether to include all entities detected when processing the current request. */
  entities?: boolean;
};

export const responseOptionsSchema: Schema<ResponseOptions> = s.object<ResponseOptions>({
  variables: s.optional(s.lazy(() => responseOptionsVariablesSchema)),
  metrics: s.optional(s.boolean()),
  intents: s.optional(s.boolean()),
  entities: s.optional(s.boolean()),
});
