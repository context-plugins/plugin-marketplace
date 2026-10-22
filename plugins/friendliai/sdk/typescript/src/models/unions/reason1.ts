import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reasonSchema, type Reason } from "../reason.js";

/** The reason why the response is incomplete. */
export type Reason1 = Reason;

export const reason1Schema: Schema<Reason1> = s.of<Reason1>(s.union([s.lazy(() => reasonSchema)]));
