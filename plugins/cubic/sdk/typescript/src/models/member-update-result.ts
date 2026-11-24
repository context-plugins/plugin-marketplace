import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { afterSchema, type After } from "./after.js";
import { beforeSchema, type Before } from "./before.js";

export type MemberUpdateResult = {
  githubUserId: string;
  before: Before;
  after: After;
  changed: boolean;
  availableSeats: number;
  /** @default "False" */
  purchasedQuantityChanged?: "False";
};

export const memberUpdateResultSchema: Schema<MemberUpdateResult> = s.object<MemberUpdateResult>({
  githubUserId: s.string(),
  before: beforeSchema,
  after: afterSchema,
  changed: s.boolean(),
  availableSeats: s.float64(),
  purchasedQuantityChanged: s.defaulted(s.literal("False"), "False"),
});
