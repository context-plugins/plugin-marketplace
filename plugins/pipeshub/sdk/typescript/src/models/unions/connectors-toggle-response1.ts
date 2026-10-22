import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../error-response.js";
import { localFsDesktopRefusalSchema, type LocalFsDesktopRefusal } from "../local-fs-desktop-refusal.js";

export type ConnectorsToggleResponse1 = LocalFsDesktopRefusal | ErrorResponse;

export const connectorsToggleResponse1Schema: Schema<ConnectorsToggleResponse1> =
  s.of<ConnectorsToggleResponse1>(
    s.union([s.lazy(() => localFsDesktopRefusalSchema), s.lazy(() => errorResponseSchema)]),
  );
