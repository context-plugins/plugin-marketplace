import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the session is a test session */
export type IsTest = boolean;

export const isTestSchema: Schema<IsTest> = s.of<IsTest>(s.union([s.boolean()]));
