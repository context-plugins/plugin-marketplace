import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentResource3Schema, type ComponentResource3 } from "./component-resource3.js";

export type ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1 = {
  componentResources: ComponentResource3[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterRosteringV1P2CoursesComponentResourcesResponse1Schema: Schema<ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1> =
  s.object<ImsOnerosterRosteringV1P2CoursesComponentResourcesResponse1>({
    componentResources: s.array(s.lazy(() => componentResource3Schema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
