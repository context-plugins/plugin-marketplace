import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GroupByCodeqrIoLinksApi = {
  Domain: "domain",
} as const;
export type GroupByCodeqrIoLinksApi =
  | (typeof GroupByCodeqrIoLinksApi)[keyof typeof GroupByCodeqrIoLinksApi]
  | (string & {});

export const groupByCodeqrIoLinksApiSchema: EnumSchema<GroupByCodeqrIoLinksApi> =
  s.enumOf<GroupByCodeqrIoLinksApi>(GroupByCodeqrIoLinksApi);
