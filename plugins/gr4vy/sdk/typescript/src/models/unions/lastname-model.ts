import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Last name of the consumer. */
export type LastnameModel = string;

export const lastnameModelSchema: Schema<LastnameModel> = s.of<LastnameModel>(s.union([s.string()]));
