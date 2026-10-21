import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { context1Schema, type Context1 } from "./context1.js";

export type JourneyStartRequest = {
  /** Resource Id, a unique identifier for a resource, such as a journey or instance. */
  resourceId: string;
  context?: Context1;
  data?: Record<string, unknown>;
};

export const journeyStartRequestSchema: Schema<JourneyStartRequest> = s.object<JourneyStartRequest>({
  resourceId: s.string(),
  context: s.optional(s.lazy(() => context1Schema)),
  data: s.optional(s.record(s.string(), s.unknown())),
});
