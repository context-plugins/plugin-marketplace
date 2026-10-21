import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentResource3Schema, type ComponentResource3 } from "./component-resource3.js";

export type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2 = {
  /** Represents a resource associated with a course component. */
  componentResource: ComponentResource3;
};

export const imsOnerosterRosteringV1P2CoursesComponentResourcesResponse2Schema: Schema<ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2> =
  s.object<ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse2>({
    componentResource: componentResource3Schema,
  });
