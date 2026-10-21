import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The reason for inclusion of clusteredResults. */
export const ClusterTypeEnum = {
  Similar: "SIMILAR",
  Freshness: "FRESHNESS",
  Title: "TITLE",
  Content: "CONTENT",
  None: "NONE",
  ThreadReply: "THREAD_REPLY",
  ThreadRoot: "THREAD_ROOT",
  Prefix: "PREFIX",
  Suffix: "SUFFIX",
  AuthorPrefix: "AUTHOR_PREFIX",
  AuthorSuffix: "AUTHOR_SUFFIX",
} as const;
export type ClusterTypeEnum = (typeof ClusterTypeEnum)[keyof typeof ClusterTypeEnum] | (string & {});

export const clusterTypeEnumSchema: EnumSchema<ClusterTypeEnum> = s.enumOf<ClusterTypeEnum>(ClusterTypeEnum);
