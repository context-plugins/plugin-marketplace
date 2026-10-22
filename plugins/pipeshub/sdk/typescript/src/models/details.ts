import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type Details = {
  code: Code;
  connectorId: string;
  retryable: boolean;
  /** Name of the owner device, when the connector has one. */
  ownerDeviceName?: string;
};

export const detailsSchema: Schema<Details> = s.object<Details>({
  code: codeSchema,
  connectorId: s.string(),
  retryable: s.boolean(),
  ownerDeviceName: s.optional(s.string()),
});
