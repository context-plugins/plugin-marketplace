import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Only tasksets with a live task whose latest version uses a scenario on this registry */
export type RegistryId2 = string;

export const registryId2Schema: Schema<RegistryId2> = s.of<RegistryId2>(s.union([s.string()]));
