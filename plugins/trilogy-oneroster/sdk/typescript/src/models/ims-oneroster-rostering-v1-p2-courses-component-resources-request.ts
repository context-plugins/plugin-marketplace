import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentResource2Schema, type ComponentResource2 } from "./component-resource2.js";

export type ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest = {
  /** Represents a resource associated with a course component. */
  componentResource: ComponentResource2;
};

export const imsOnerosterRosteringV1P2CoursesComponentResourcesRequestSchema: Schema<ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest> =
  s.object<ImsOnerosterRosteringV1P2CoursesComponentResourcesRequest>({
    componentResource: componentResource2Schema,
  });
