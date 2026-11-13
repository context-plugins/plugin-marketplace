import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Column type, by default Any. Ref, RefList and DateTime types requires a postfix, e.g.
 * <code>DateTime:America/New_York</code>, <code>Ref:Users</code>
 */
export const Type = {
  Any: "Any",
  Text: "Text",
  Numeric: "Numeric",
  Int: "Int",
  Bool: "Bool",
  Date: "Date",
  DateTimeTimezone: "DateTime:<timezone>",
  Choice: "Choice",
  ChoiceList: "ChoiceList",
  RefTableId: "Ref:<tableId>",
  RefListTableId: "RefList:<tableId>",
  Attachments: "Attachments",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
