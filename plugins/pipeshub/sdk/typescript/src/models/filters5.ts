import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appliedSchema, type Applied } from "./applied.js";
import { availableSchema, type Available } from "./available.js";

export type Filters5 = {
  /**
   * Active filters. Empty `{}` when defaults. Keys use snake_case for sort fields (backend
   * convention in kb_service.py).
   */
  applied: Applied;
  available: Available;
};

export const filters5Schema: Schema<Filters5> = s.object<Filters5>({
  applied: appliedSchema,
  available: availableSchema,
});
