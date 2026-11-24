import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The field to sort the links by. The default is `createdAt`, and sort order is always descending.
 */
export const Sort = {
  CreatedAt: "createdAt",
  Clicks: "clicks",
  LastClicked: "lastClicked",
} as const;
export type Sort = (typeof Sort)[keyof typeof Sort] | (string & {});

export const sortSchema: EnumSchema<Sort> = s.enumOf<Sort>(Sort);
