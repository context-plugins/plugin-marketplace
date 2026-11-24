import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A versioned, deployable package of a Boomi component. */
export type PackagedComponent = {
  /** Unique identifier of the packaged component. */
  packageId?: string;
  /** ID of the underlying component. */
  componentId?: string;
  /** Version of the component included in this package. */
  componentVersion?: string;
  /** Type of the packaged component (process, connector, etc.). */
  componentType?: string;
  /** Version label for this package. */
  packageVersion?: string;
  /** Timestamp when the package was created. */
  createdDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const packagedComponentSchema: Schema<PackagedComponent> = s.object<PackagedComponent>(
  {
    packageId: s.optional(s.string()),
    componentId: s.optional(s.string()),
    componentVersion: s.optional(s.string()),
    componentType: s.optional(s.string()),
    packageVersion: s.optional(s.string()),
    createdDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
