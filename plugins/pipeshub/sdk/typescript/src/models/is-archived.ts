import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IsArchived = {
  True: "true",
  False: "false",
} as const;
export type IsArchived = (typeof IsArchived)[keyof typeof IsArchived] | (string & {});

export const isArchivedSchema: EnumSchema<IsArchived> = s.enumOf<IsArchived>(IsArchived);
