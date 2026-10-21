import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userAccessControlListSchema, type UserAccessControlList } from "./user-access-control-list.js";

export type CountedUserAccessControlList = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: UserAccessControlList[];
};

export const countedUserAccessControlListSchema: Schema<CountedUserAccessControlList> =
  s.object<CountedUserAccessControlList>({
    count: s.int(),
    items: s.array(s.lazy(() => userAccessControlListSchema)),
  });
