import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsiveBreakpointSchema, type ResponsiveBreakpoint } from "../responsive-breakpoint.js";

/** Settings to automatically generate breakpoints for responsive images. */
export type ResponsiveBreakpoints = ResponsiveBreakpoint[] | ResponsiveBreakpoint;

export const responsiveBreakpointsSchema: Schema<ResponsiveBreakpoints> = s.of<ResponsiveBreakpoints>(
  s.union([s.array(s.lazy(() => responsiveBreakpointSchema)), s.lazy(() => responsiveBreakpointSchema)]),
);
