import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { mockCardOptionsSchema, type MockCardOptions } from "../mock-card-options.js";

/** Custom options to be passed to the `mock-card` connector. */
export type MockCard = MockCardOptions;

export const mockCardSchema: Schema<MockCard> = s.of<MockCard>(
  s.union([s.lazy(() => mockCardOptionsSchema)]),
);
