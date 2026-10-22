import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthHeaderConfInputServicenowTable = {
  /** OAuth header name */
  name: string;
  /** OAuth header value */
  value: string;
};

export const oauthHeaderConfInputServicenowTableSchema: Schema<OauthHeaderConfInputServicenowTable> =
  s.object<OauthHeaderConfInputServicenowTable>({
    name: s.string(),
    value: s.string(),
  });
