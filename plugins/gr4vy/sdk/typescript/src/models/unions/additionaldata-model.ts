import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes additional data to the Adyen API when creating a transaction. */
export type AdditionaldataModel = Record<string, string>;

export const additionaldataModelSchema: Schema<AdditionaldataModel> = s.of<AdditionaldataModel>(
  s.union([s.record(s.string(), s.string())]),
);
