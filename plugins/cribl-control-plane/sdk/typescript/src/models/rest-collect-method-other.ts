import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectMethodOptionsRestCollectMethodOtherSchema,
  type CollectMethodOptionsRestCollectMethodOther,
} from "./collect-method-options-rest-collect-method-other.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";

export type RestCollectMethodOther = {
  /** Discriminator value. */
  collectMethod?: CollectMethodOptionsRestCollectMethodOther;
  /** Custom HTTP method to use for the Collect operation */
  collectVerb: string;
  /**
   * Template for body to send with the Collect request. Reference global variables, functions, or
   * parameters from the Discover response using template parameters: `${C.vars.myVar}`, or
   * `${Date.now()}`, `${param}`
   */
  collectBody?: string;
  /** Collect parameters */
  collectRequestParams?: CollectRequestParamConfRestCollectMethodGet[];
};

export const restCollectMethodOtherSchema: Schema<RestCollectMethodOther> = s.object<RestCollectMethodOther>({
  collectMethod: s.optional(s.lazy(() => collectMethodOptionsRestCollectMethodOtherSchema)),
  collectVerb: s.string(),
  collectBody: s.optional(s.string()),
  collectRequestParams: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
});
