import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listProfileResponseSchema, type ListProfileResponse } from "./list-profile-response.js";

export type Embedded10 = {
  /** An array of profile objects. */
  profiles: ListProfileResponse[];
};

export const embedded10Schema: Schema<Embedded10> = s.object<Embedded10>({
  profiles: s.array(s.lazy(() => listProfileResponseSchema)),
});
