import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeOfWork = {
  Projects: "projects",
  Processes: "processes",
  Both: "both",
} as const;
export type TypeOfWork = (typeof TypeOfWork)[keyof typeof TypeOfWork] | (string & {});

export const typeOfWorkSchema: EnumSchema<TypeOfWork> = s.enumOf<TypeOfWork>(TypeOfWork);
