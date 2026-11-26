import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RefVariable = {
  /** API name of a variable defined in the bot definition. */
  name: string;
  /** Variable type of a reference ID variable. @default "ref" */
  type?: "ref";
  /** Variable value in reference ID format. */
  value: string | null;
};

export const refVariableSchema: Schema<RefVariable> = s.object<RefVariable>({
  name: s.string(),
  type: s.defaulted(s.literal("ref"), "ref"),
  value: s.nullable(s.string()),
});
