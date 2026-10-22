import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { user2Schema, type User2 } from "./user2.js";

export type ImsOnerosterRosteringV1P2UsersRequest = {
  user: User2;
};

export const imsOnerosterRosteringV1P2UsersRequestSchema: Schema<ImsOnerosterRosteringV1P2UsersRequest> =
  s.object<ImsOnerosterRosteringV1P2UsersRequest>({
    user: user2Schema,
  });
