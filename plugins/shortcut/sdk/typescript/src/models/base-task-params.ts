import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request parameters for specifying how to pre-populate a task through a template. */
export type BaseTaskParams = {
  /** The Task description. */
  description: string;
  /** True/false boolean indicating whether the Task is completed. Defaults to false. */
  complete?: boolean;
  /** An array of UUIDs for any members you want to add as Owners on this new Task. */
  ownerIds?: string[];
  /**
   * This field can be set to another unique ID. In the case that the Task has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string;
};

const baseTaskParamsProperties: s.Shape<BaseTaskParams> = {
  description: s.string(),
  complete: s.optional(s.boolean()),
  ownerIds: s.optional(s.array(s.string())),
  externalId: s.optional(s.string()),
  _keysMap: {
    ownerIds: "owner_ids",
    externalId: "external_id",
  },
};

export const baseTaskParamsInternalSchema: Schema<BaseTaskParams> =
  s.object<BaseTaskParams>(baseTaskParamsProperties);

export const baseTaskParamsSchema: Schema<BaseTaskParams> = s.lazySchema(() =>
  s.object<BaseTaskParams>({
    ...baseTaskParamsProperties,
    description: s.string().check(s.minLength(1), s.maxLength(2048)),
    externalId: s.optional(s.string().check(s.maxLength(128))),
  }),
);
