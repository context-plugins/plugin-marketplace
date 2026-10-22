import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { user1Schema, type User1 } from "./user1.js";

export type ImsOnerosterRosteringV1P2UsersDemographicsResponse = {
  user: User1;
};

export const imsOnerosterRosteringV1P2UsersDemographicsResponseSchema: Schema<ImsOnerosterRosteringV1P2UsersDemographicsResponse> =
  s.object<ImsOnerosterRosteringV1P2UsersDemographicsResponse>({
    user: user1Schema,
  });
