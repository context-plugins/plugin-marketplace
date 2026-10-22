import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardClickResponse = {
  /** The outcome of the request */
  status: string;
};

export const cardClickResponseSchema: Schema<CardClickResponse> = s.object<CardClickResponse>({
  status: s.string(),
});
