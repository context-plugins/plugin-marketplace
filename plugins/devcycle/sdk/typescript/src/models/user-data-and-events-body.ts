import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { userDataInternalSchema, userDataSchema, type UserData } from "./user-data.js";

export type UserDataAndEventsBody = {
  events?: Event[];
  user?: UserData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userDataAndEventsBodyProperties: s.Shape<UserDataAndEventsBody> = {
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  user: s.optional(s.lazy(() => userDataInternalSchema)),
};

export const userDataAndEventsBodyInternalSchema: Schema<UserDataAndEventsBody> =
  s.object<UserDataAndEventsBody>(userDataAndEventsBodyProperties, { additionalProperties: s.json() });

export const userDataAndEventsBodySchema: Schema<UserDataAndEventsBody> = s.lazySchema(() =>
  s.object<UserDataAndEventsBody>(
    {
      ...userDataAndEventsBodyProperties,
      user: s.optional(s.lazy(() => userDataSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
