import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Opaque token returned by Paze for the completion call. */
export type Completeresponse = string;

export const completeresponseSchema: Schema<Completeresponse> = s.of<Completeresponse>(s.union([s.string()]));
