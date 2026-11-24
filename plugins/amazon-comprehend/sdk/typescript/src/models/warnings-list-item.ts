import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { warnCodeSchema, type WarnCode } from "./warn-code.js";

export type WarningsListItem = {
  /** Page number in the input document. */
  page?: number;
  /** The type of warning. */
  warnCode?: WarnCode;
  /** Text message associated with the warning. */
  warnMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const warningsListItemSchema: Schema<WarningsListItem> = s.object<WarningsListItem>(
  {
    page: s.optional(s.int()),
    warnCode: s.optional(s.lazy(() => warnCodeSchema)),
    warnMessage: s.optional(s.string()),
    _keysMap: {
      page: "Page",
      warnCode: "WarnCode",
      warnMessage: "WarnMessage",
    },
  },
  { additionalProperties: s.json() },
);
