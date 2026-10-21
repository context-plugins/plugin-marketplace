import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /betausers API call */
export type GreenlistUsersRequest = {
  /** Datasource which needs to be made visible to users specified in the `emails` field. */
  datasource: string;
  /** The emails of the beta users */
  emails: string[];
};

export const greenlistUsersRequestSchema: Schema<GreenlistUsersRequest> = s.object<GreenlistUsersRequest>({
  datasource: s.string(),
  emails: s.array(s.string()),
});
