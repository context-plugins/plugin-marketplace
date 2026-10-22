import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextInstanceRecordSchema, type ContextInstanceRecord } from "./context-instance-record.js";
import { linkSchema, type Link } from "./link.js";

export type ContextInstances = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** The number of unique context instances */
  totalCount?: number;
  /** The environment ID */
  environmentId: string;
  /**
   * An obfuscated string that references the last context instance on the previous page of results.
   * You can use this for pagination, however, we recommend using the <code>next</code> link
   * instead.
   */
  continuationToken?: string;
  /**
   * A collection of context instances. Can include multiple versions of context instances that have
   * the same <code>id</code>, but different <code>applicationId</code>s.
   */
  items: ContextInstanceRecord[];
};

export const contextInstancesSchema: Schema<ContextInstances> = s.object<ContextInstances>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  totalCount: s.optional(s.int()),
  environmentId: s.string(),
  continuationToken: s.optional(s.string()),
  items: s.array(s.lazy(() => contextInstanceRecordSchema)),
  _keysMap: {
    links: "_links",
    environmentId: "_environmentId",
  },
});
