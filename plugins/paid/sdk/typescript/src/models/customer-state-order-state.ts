import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerStateOrderState = {
  Draft: "draft",
  Active: "active",
  Paused: "paused",
  Ended: "ended",
} as const;
export type CustomerStateOrderState =
  | (typeof CustomerStateOrderState)[keyof typeof CustomerStateOrderState]
  | (string & {});

export const customerStateOrderStateSchema: EnumSchema<CustomerStateOrderState> =
  s.enumOf<CustomerStateOrderState>(CustomerStateOrderState);
