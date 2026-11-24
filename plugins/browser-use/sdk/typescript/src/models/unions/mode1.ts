import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  modeBrowserUsePublicApiV4WalletsApiSchema,
  type ModeBrowserUsePublicApiV4WalletsApi,
} from "../mode-browser-use-public-api-v4-wallets-api.js";

export type Mode1 = ModeBrowserUsePublicApiV4WalletsApi;

export const mode1Schema: Schema<Mode1> = s.of<Mode1>(
  s.union([s.lazy(() => modeBrowserUsePublicApiV4WalletsApiSchema)]),
);
