import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Order workspace users by ID, or by name with the requesting user first. Name sorting requires
 * workspace_id.
 */
export const Sort = {
  Id: "id",
  Name: "name",
} as const;
export type Sort = (typeof Sort)[keyof typeof Sort] | (string & {});

export const sortSchema: EnumSchema<Sort> = s.enumOf<Sort>(Sort);
