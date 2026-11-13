import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  publicProjectConfigurationSchema,
  type PublicProjectConfiguration,
} from "../public-project-configuration.js";

/** Configuration for the selected visibility level. */
export type Configuration = Record<string, unknown> | PublicProjectConfiguration;

export const configurationSchema: Schema<Configuration> = s.of<Configuration>(
  s.union([s.record(s.string(), s.unknown()), s.lazy(() => publicProjectConfigurationSchema)]),
);
