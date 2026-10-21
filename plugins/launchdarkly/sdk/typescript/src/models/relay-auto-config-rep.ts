import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { memberSummarySchema, type MemberSummary } from "./member-summary.js";
import { statementSchema, type Statement } from "./statement.js";

export type RelayAutoConfigRep = {
  id: string;
  creator?: MemberSummary;
  access?: Access;
  /** A human-friendly name for the Relay Proxy configuration */
  name: string;
  /** A description of what environments and projects the Relay Proxy should include or exclude */
  policy: Statement[];
  /** The Relay Proxy configuration key */
  fullKey?: string;
  /**
   * The last few characters of the Relay Proxy configuration key, displayed in the LaunchDarkly UI
   */
  displayKey: string;
  creationDate: number;
  lastModified: number;
};

export const relayAutoConfigRepSchema: Schema<RelayAutoConfigRep> = s.object<RelayAutoConfigRep>({
  id: s.string(),
  creator: s.optional(s.lazy(() => memberSummarySchema)),
  access: s.optional(s.lazy(() => accessSchema)),
  name: s.string(),
  policy: s.array(s.lazy(() => statementSchema)),
  fullKey: s.optional(s.string()),
  displayKey: s.string(),
  creationDate: s.int(),
  lastModified: s.int(),
  _keysMap: {
    id: "_id",
    creator: "_creator",
    access: "_access",
  },
});
