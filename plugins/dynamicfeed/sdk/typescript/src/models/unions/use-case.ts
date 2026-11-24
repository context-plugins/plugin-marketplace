import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UseCase = string;

export const useCaseSchema: Schema<UseCase> = s.of<UseCase>(s.union([s.string()]));
