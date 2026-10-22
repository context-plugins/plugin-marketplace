import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { mockCardOptionsSchema, type MockCardOptions } from "../mock-card-options.js";

/** Custom options to be passed to the `mockds-card` connector. */
export type MockdsCard = MockCardOptions;

export const mockdsCardSchema: Schema<MockdsCard> = s.of<MockdsCard>(
  s.union([s.lazy(() => mockCardOptionsSchema)]),
);
