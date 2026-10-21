import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementSchema, type Statement } from "./statement.js";

export type RelayAutoConfigPost = {
  /** A human-friendly name for the Relay Proxy configuration */
  name: string;
  /**
   * A description of what environments and projects the Relay Proxy should include or exclude. To
   * learn more, read [Write an inline
   * policy](https://launchdarkly.com/docs/sdk/relay-proxy/automatic-configuration#write-an-inline-policy).
   */
  policy: Statement[];
};

export const relayAutoConfigPostSchema: Schema<RelayAutoConfigPost> = s.object<RelayAutoConfigPost>({
  name: s.string(),
  policy: s.array(s.lazy(() => statementSchema)),
});
