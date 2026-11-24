import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PollResponsesOrderBy = {
  Created: "created",
} as const;
export type PollResponsesOrderBy =
  | (typeof PollResponsesOrderBy)[keyof typeof PollResponsesOrderBy]
  | (string & {});

export const pollResponsesOrderBySchema: EnumSchema<PollResponsesOrderBy> =
  s.enumOf<PollResponsesOrderBy>(PollResponsesOrderBy);
