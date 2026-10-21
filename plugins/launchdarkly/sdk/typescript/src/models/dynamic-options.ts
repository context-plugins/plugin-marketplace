import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dynamicOptionsParserSchema, type DynamicOptionsParser } from "./dynamic-options-parser.js";
import { endpointSchema, type Endpoint } from "./endpoint.js";

export type DynamicOptions = {
  endpoint?: Endpoint;
  parser?: DynamicOptionsParser;
};

export const dynamicOptionsSchema: Schema<DynamicOptions> = s.object<DynamicOptions>({
  endpoint: s.optional(s.lazy(() => endpointSchema)),
  parser: s.optional(s.lazy(() => dynamicOptionsParserSchema)),
});
