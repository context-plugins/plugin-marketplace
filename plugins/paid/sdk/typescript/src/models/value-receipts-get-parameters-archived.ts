import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ValueReceiptsGetParametersArchived = {
  True: "true",
  False: "false",
} as const;
export type ValueReceiptsGetParametersArchived =
  | (typeof ValueReceiptsGetParametersArchived)[keyof typeof ValueReceiptsGetParametersArchived]
  | (string & {});

export const valueReceiptsGetParametersArchivedSchema: EnumSchema<ValueReceiptsGetParametersArchived> =
  s.enumOf<ValueReceiptsGetParametersArchived>(ValueReceiptsGetParametersArchived);
