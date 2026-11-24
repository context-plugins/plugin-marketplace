import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { boardsSchema, type Boards } from "./boards.js";
import { status3Schema, type Status3 } from "./status3.js";

export type Health = {
  /**
   * `degraded` when a board is past the age bound (`stale_boards`) or cannot be served
   * (`missing_boards`). Still HTTP 200.
   */
  status: Status3;
  version: string;
  boards: Record<string, Boards>;
  staleBoards?: string[];
  maxBoardAgeS?: number;
  missingBoards?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const healthSchema: Schema<Health> = s.object<Health>(
  {
    status: status3Schema,
    version: s.string(),
    boards: s.record(
      s.string(),
      s.lazy(() => boardsSchema),
    ),
    staleBoards: s.optional(s.array(s.string())),
    maxBoardAgeS: s.optional(s.float64()),
    missingBoards: s.optional(s.array(s.string())),
    _keysMap: {
      staleBoards: "stale_boards",
      maxBoardAgeS: "max_board_age_s",
      missingBoards: "missing_boards",
    },
  },
  { additionalProperties: s.json() },
);
