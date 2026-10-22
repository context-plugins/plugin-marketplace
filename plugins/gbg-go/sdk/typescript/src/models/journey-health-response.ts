import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyHealthResponse = {
  message: string;
};

export const journeyHealthResponseSchema: Schema<JourneyHealthResponse> = s.object<JourneyHealthResponse>({
  message: s.string(),
});
