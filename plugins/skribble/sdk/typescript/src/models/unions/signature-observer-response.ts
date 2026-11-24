import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { groupObserverResponseSchema, type GroupObserverResponse } from "../group-observer-response.js";
import {
  userObserverResponseInternalSchema,
  userObserverResponseSchema,
  type UserObserverResponse,
} from "../user-observer-response.js";

/**
 * Response object representing an observer that has been added to a signature request.
 *
 * Depending on the type, either user_info or group_info is present.
 */
export type SignatureObserverResponse =
  | (UserObserverResponse & { type: "USER" })
  | (GroupObserverResponse & { type: "GROUP" });

export const signatureObserverResponseInternalSchema: Schema<SignatureObserverResponse> =
  s.discriminatedUnion<SignatureObserverResponse>("type", {
    USER: userObserverResponseInternalSchema,
    GROUP: groupObserverResponseSchema,
  });

export const signatureObserverResponseSchema: Schema<SignatureObserverResponse> = s.lazySchema(() =>
  s.discriminatedUnion<SignatureObserverResponse>("type", {
    USER: userObserverResponseSchema,
    GROUP: groupObserverResponseSchema,
  }),
);
