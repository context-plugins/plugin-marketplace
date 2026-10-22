import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  BadRequest: "BAD_REQUEST",
  Location: "LOCATION",
  Form: "FORM",
  NoInteraction: "NO_INTERACTION",
  Interaction: "INTERACTION",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
