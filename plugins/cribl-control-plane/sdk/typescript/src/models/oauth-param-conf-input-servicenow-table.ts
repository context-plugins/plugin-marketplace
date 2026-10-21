import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthParamConfInputServicenowTable = {
  /** OAuth parameter name */
  name: string;
  /** OAuth parameter value */
  value: string;
};

export const oauthParamConfInputServicenowTableSchema: Schema<OauthParamConfInputServicenowTable> =
  s.object<OauthParamConfInputServicenowTable>({
    name: s.string(),
    value: s.string(),
  });
