import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { enter1Schema, type Enter1 } from "./enter1.js";

/** Actions to execute when entering a step (before collecting inputs). */
export type Enter = Enter1[];

export const enterSchema: Schema<Enter> = s.of<Enter>(s.union([s.array(s.lazy(() => enter1Schema))]));
