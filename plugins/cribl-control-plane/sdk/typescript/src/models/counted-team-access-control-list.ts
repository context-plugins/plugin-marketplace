import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamAccessControlListSchema, type TeamAccessControlList } from "./team-access-control-list.js";

export type CountedTeamAccessControlList = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: TeamAccessControlList[];
};

export const countedTeamAccessControlListSchema: Schema<CountedTeamAccessControlList> =
  s.object<CountedTeamAccessControlList>({
    count: s.int(),
    items: s.array(s.lazy(() => teamAccessControlListSchema)),
  });
