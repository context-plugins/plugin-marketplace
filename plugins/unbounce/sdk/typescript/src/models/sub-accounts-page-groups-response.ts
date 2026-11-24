import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pageGroupSchema, type PageGroup } from "./page-group.js";

export type SubAccountsPageGroupsResponse = {
  pageGroups?: PageGroup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subAccountsPageGroupsResponseSchema: Schema<SubAccountsPageGroupsResponse> =
  s.object<SubAccountsPageGroupsResponse>(
    {
      pageGroups: s.optional(s.array(s.lazy(() => pageGroupSchema))),
      _keysMap: {
        pageGroups: "page_groups",
      },
    },
    { additionalProperties: s.json() },
  );
