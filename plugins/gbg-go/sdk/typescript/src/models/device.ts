import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Device = {
  type?: string;
  model?: string;
  hasContactlessReader?: boolean;
  hasMagneticStripeReader?: boolean;
  hasCamera?: boolean;
  serialNumber?: string;
  manufacturer?: string;
};

export const deviceSchema: Schema<Device> = s.object<Device>({
  type: s.optional(s.string()),
  model: s.optional(s.string()),
  hasContactlessReader: s.optional(s.boolean()),
  hasMagneticStripeReader: s.optional(s.boolean()),
  hasCamera: s.optional(s.boolean()),
  serialNumber: s.optional(s.string()),
  manufacturer: s.optional(s.string()),
});
