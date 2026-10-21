import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

export type JourneyDeviceStartRequest = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
  scope: Scope[];
};

export const journeyDeviceStartRequestSchema: Schema<JourneyDeviceStartRequest> =
  s.object<JourneyDeviceStartRequest>({
    instanceId: s.string(),
    scope: s.array(s.lazy(() => scopeSchema)),
  });
