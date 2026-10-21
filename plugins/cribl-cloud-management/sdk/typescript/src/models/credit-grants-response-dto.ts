import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditGrantSchemaSchema, type CreditGrantSchema } from "./credit-grant-schema.js";

export type CreditGrantsResponseDto = {
  /**
   * Credit grants for the current contract. Listed in reverse chronologial order by grant date
   * (newest first).
   */
  items: CreditGrantSchema[];
  /** Total number of items in the response. */
  count: number;
};

export const creditGrantsResponseDtoSchema: Schema<CreditGrantsResponseDto> =
  s.object<CreditGrantsResponseDto>({
    items: s.array(s.lazy(() => creditGrantSchemaSchema)),
    count: s.int(),
  });
