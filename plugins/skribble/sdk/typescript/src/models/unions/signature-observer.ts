import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { groupObserverSchema, type GroupObserver } from "../group-observer.js";
import { userObserverInternalSchema, userObserverSchema, type UserObserver } from "./user-observer.js";

/**
 * Defines an observer target which can either be a USER or a GROUP.
 *
 * - For type USER, either email or user_id must be provided (but not both). When using email, a
 *   user will be automatically created if not present and returned.
 * - For type GROUP, group_id must be provided and no user fields are allowed.
 */
export type SignatureObserver = UserObserver | GroupObserver;

export const signatureObserverInternalSchema: Schema<SignatureObserver> = s.of<SignatureObserver>(
  s.union([s.lazy(() => userObserverInternalSchema), s.lazy(() => groupObserverSchema)]),
);

export const signatureObserverSchema: Schema<SignatureObserver> = s.lazySchema(() =>
  s.of<SignatureObserver>(s.union([s.lazy(() => userObserverSchema), s.lazy(() => groupObserverSchema)])),
);
