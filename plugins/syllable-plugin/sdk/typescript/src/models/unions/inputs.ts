import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Input field names to persist; None saves all collected inputs. */
export type Inputs = string[];

export const inputsSchema: Schema<Inputs> = s.of<Inputs>(s.union([s.array(s.string())]));
