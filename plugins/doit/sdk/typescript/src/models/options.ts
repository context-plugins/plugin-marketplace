import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Options = {
  /**
   * Create unbound Datastore tables from the schemas embedded in the bundle (structure only, never
   * row data). A same-named existing table with an incompatible schema is a validation error.
   *
   * @default false
   */
  createMissingTables?: boolean;
  /** Optional prefix for every created flow's name. */
  namePrefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optionsSchema: Schema<Options> = s.object<Options>(
  {
    createMissingTables: s.defaulted(s.boolean(), false),
    namePrefix: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
