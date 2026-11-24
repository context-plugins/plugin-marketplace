import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { federalSchema, type Federal } from "./unions/federal.js";
import {
  statePlinthUsGrantsDataOrganizationsApiSchema,
  type StatePlinthUsGrantsDataOrganizationsApi,
} from "./unions/state-plinth-us-grants-data-organizations-api.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

/** Federal (USAspending) and state-checkbook money this EIN received. */
export type GovFundingResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  ein: string;
  federal?: Federal;
  state?: StatePlinthUsGrantsDataOrganizationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const govFundingResponseSchema: Schema<GovFundingResponse> = s.object<GovFundingResponse>(
  {
    code: s.defaulted(s.int(), 200),
    message: s.string(),
    xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
    ein: s.string(),
    federal: s.optional(s.lazy(() => federalSchema)),
    state: s.optional(s.lazy(() => statePlinthUsGrantsDataOrganizationsApiSchema)),
    _keysMap: {
      xPlinth: "x_plinth",
    },
  },
  { additionalProperties: s.json() },
);
