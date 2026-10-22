import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsiveBreakpoint = {
  /** Whether to generate and store the derived images. Default is true. */
  createDerived?: boolean;
  /** The maximum width for responsive breakpoint images. */
  maxWidth?: number;
  /** The minimum width for responsive breakpoint images. */
  minWidth?: number;
  /** The minimum byte size difference between consecutive breakpoint images. */
  bytesStep?: number;
  /** The maximum number of breakpoint images to generate. */
  maxImages?: number;
  /** A transformation string to apply before generating breakpoints. */
  transformation?: string;
};

export const responsiveBreakpointSchema: Schema<ResponsiveBreakpoint> = s.object<ResponsiveBreakpoint>({
  createDerived: s.optional(s.boolean()),
  maxWidth: s.optional(s.int()),
  minWidth: s.optional(s.int()),
  bytesStep: s.optional(s.int()),
  maxImages: s.optional(s.int()),
  transformation: s.optional(s.string()),
  _keysMap: {
    createDerived: "create_derived",
    maxWidth: "max_width",
    minWidth: "min_width",
    bytesStep: "bytes_step",
    maxImages: "max_images",
  },
});
