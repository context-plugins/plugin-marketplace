import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { userByEmailInternalSchema, userByEmailSchema, type UserByEmail } from "../user-by-email.js";
import { userByIdSchema, type UserById } from "../user-by-id.js";

export type UserObserver = UserByEmail | UserById;

export const userObserverInternalSchema: Schema<UserObserver> = s.of<UserObserver>(
  s.union([s.lazy(() => userByEmailInternalSchema), s.lazy(() => userByIdSchema)]),
);

export const userObserverSchema: Schema<UserObserver> = s.lazySchema(() =>
  s.of<UserObserver>(s.union([s.lazy(() => userByEmailSchema), s.lazy(() => userByIdSchema)])),
);
