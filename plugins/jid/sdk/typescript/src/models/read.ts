import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { failedSchema, type Failed } from "./failed.js";
import { lookupSchema, type Lookup } from "./lookup.js";
import { recommendation1Schema, type Recommendation1 } from "./recommendation1.js";

/** What to show a human: render this and nothing else. */
export type Read = {
  headline?: string;
  recommendation?: Recommendation1;
  passed?: number;
  /**
   * Checks that ran (status pass or fail) and decide (severity block or warn), plus location
   * consistency, which is counted but never decides
   */
  total?: number;
  /**
   * Why a read with no registry match is not engage, e.g. "Not found on the registers Jid checks
   * for Indonesia (LEI records only)". Also in the headline, followed by ", so: verify first".
   */
  reason?: string;
  /** Labels of deciding checks that did not run or did not finish */
  notChecked?: string[];
  /**
   * Qualify only, response only (never stored): the Jid Signals location next to the stated place
   * and the company domain's age
   */
  sender?: string;
  failed?: Failed[];
  lookups?: Lookup[];
  fileUrl?: string;
  subject?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const readProperties: s.Shape<Read> = {
  headline: s.optional(s.string()),
  recommendation: s.optional(s.lazy(() => recommendation1Schema)),
  passed: s.optional(s.int()),
  total: s.optional(s.int()),
  reason: s.optional(s.string()),
  notChecked: s.optional(s.array(s.string())),
  sender: s.optional(s.string()),
  failed: s.optional(s.array(s.lazy(() => failedSchema))),
  lookups: s.optional(s.array(s.lazy(() => lookupSchema))),
  fileUrl: s.optional(s.string()),
  subject: s.optionalNullable(s.string()),
  _keysMap: {
    notChecked: "not_checked",
    fileUrl: "file_url",
  },
};

export const readInternalSchema: Schema<Read> = s.object<Read>(readProperties, {
  additionalProperties: s.json(),
});

export const readSchema: Schema<Read> = s.lazySchema(() =>
  s.object<Read>(
    {
      ...readProperties,
      notChecked: s.optional(s.array(s.string()).check(s.maxLength(4))),
      failed: s.optional(s.array(s.lazy(() => failedSchema)).check(s.maxLength(3))),
      lookups: s.optional(s.array(s.lazy(() => lookupSchema)).check(s.maxLength(4))),
    },
    { additionalProperties: s.json() },
  ),
);
