import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../error-response.js";
import { localFsDesktopRefusalSchema, type LocalFsDesktopRefusal } from "../local-fs-desktop-refusal.js";

export type ConnectorsResyncResponse1 = LocalFsDesktopRefusal | ErrorResponse;

export const connectorsResyncResponse1Schema: Schema<ConnectorsResyncResponse1> =
  s.of<ConnectorsResyncResponse1>(
    s.union([s.lazy(() => localFsDesktopRefusalSchema), s.lazy(() => errorResponseSchema)]),
  );
