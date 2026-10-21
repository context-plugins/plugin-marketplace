import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /getusercount API call */
export type GetUserCountRequest = {
  /** Datasource name for which user count is needed. */
  datasource: string;
};

export const getUserCountRequestSchema: Schema<GetUserCountRequest> = s.object<GetUserCountRequest>({
  datasource: s.string(),
});
