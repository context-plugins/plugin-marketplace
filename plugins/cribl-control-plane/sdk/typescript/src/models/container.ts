import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { containerFilterSchema, type ContainerFilter } from "./container-filter.js";
import { mode7Schema, type Mode7 } from "./mode7.js";

/** Select the level of detail for container metrics */
export type Container = {
  /** Select the level of detail for container metrics */
  mode?: Mode7;
  /** Full paths for Docker's UNIX-domain socket */
  dockerSocket?: string[];
  /** Timeout, in seconds, for the Docker API */
  dockerTimeout?: number;
  /**
   * Containers matching any of these will be included. All are included if no filters are added.
   */
  filters?: ContainerFilter[];
  /** Include stopped and paused containers */
  allContainers?: boolean;
  /** Generate separate metrics for each device */
  perDevice?: boolean;
  /** Generate full container metrics */
  detail?: boolean;
};

export const containerSchema: Schema<Container> = s.object<Container>({
  mode: s.optional(s.lazy(() => mode7Schema)),
  dockerSocket: s.optional(s.array(s.string())),
  dockerTimeout: s.optional(s.float64()),
  filters: s.optional(s.array(s.lazy(() => containerFilterSchema))),
  allContainers: s.optional(s.boolean()),
  perDevice: s.optional(s.boolean()),
  detail: s.optional(s.boolean()),
});
