import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { infoSchema, type Info } from "./info.js";

export type ListResponse = {
  resources?: Info[];
  nextCursor?: string | null;
  totalCount?: number;
};

export const listResponseSchema: Schema<ListResponse> = s.object<ListResponse>({
  resources: s.optional(s.array(s.lazy(() => infoSchema))),
  nextCursor: s.optionalNullable(s.string()),
  totalCount: s.optional(s.int()),
  _keysMap: {
    nextCursor: "next_cursor",
    totalCount: "total_count",
  },
});
