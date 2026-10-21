import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  platformRequestResolutionFieldsSchema,
  type PlatformRequestResolutionFields,
} from "../platform-request-resolution-fields.js";
import {
  platformRequestResolutionFields1Schema,
  type PlatformRequestResolutionFields1,
} from "../platform-request-resolution-fields1.js";
import {
  platformRequestResolutionFields2Schema,
  type PlatformRequestResolutionFields2,
} from "../platform-request-resolution-fields2.js";

export type PlatformRequestResolutionFields3 =
  | PlatformRequestResolutionFields
  | PlatformRequestResolutionFields1
  | PlatformRequestResolutionFields2;

export const platformRequestResolutionFields3Schema: Schema<PlatformRequestResolutionFields3> =
  s.of<PlatformRequestResolutionFields3>(
    s.union([
      s.lazy(() => platformRequestResolutionFieldsSchema),
      s.lazy(() => platformRequestResolutionFields1Schema),
      s.lazy(() => platformRequestResolutionFields2Schema),
    ]),
  );
