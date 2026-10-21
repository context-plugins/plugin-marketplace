import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contextRecordSchema, type ContextRecord } from "./context-record.js";
import { linkSchema, type Link } from "./link.js";

export type Contexts = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** The number of contexts */
  totalCount?: number;
  /** The environment ID where the context was evaluated */
  environmentId: string;
  /**
   * An obfuscated string that references the last context instance on the previous page of results.
   * You can use this for pagination, however, we recommend using the <code>next</code> link
   * instead.
   */
  continuationToken?: string;
  /**
   * A collection of contexts. Can include multiple versions of contexts that have the same
   * <code>kind</code> and <code>key</code>, but different <code>applicationId</code>s.
   */
  items: ContextRecord[];
};

export const contextsSchema: Schema<Contexts> = s.object<Contexts>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  totalCount: s.optional(s.int()),
  environmentId: s.string(),
  continuationToken: s.optional(s.string()),
  items: s.array(s.lazy(() => contextRecordSchema)),
  _keysMap: {
    links: "_links",
    environmentId: "_environmentId",
  },
});
