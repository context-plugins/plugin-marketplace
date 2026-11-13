import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action1InternalSchema, action1Schema, type Action1 } from "./unions/action1.js";
import { primaryIdSchema, type PrimaryId } from "./unions/primary-id.js";
import { referenceInternalSchema, referenceSchema, type Reference } from "./unions/reference.js";

/** A history item is a group of actions that represent a transactional change to a Story. */
export type History = {
  /** The name of the actor that performed the action, if it can be determined. */
  actorName?: string;
  /** The date when the change occurred. */
  changedAt: string;
  /** The ID of the primary entity that has changed, if applicable. */
  primaryId?: PrimaryId;
  /**
   * An array of objects affected by the change. Reference objects provide basic information for the
   * entities reference in the history actions. Some have specific fields, but they always contain
   * an id, entity_type, and a name.
   */
  references?: Reference[];
  /** An array of actions that were performed for the change. */
  actions: Action1[];
  /** The ID of the member who performed the change. */
  memberId?: string;
  /** The ID of the webhook that handled the change. */
  externalId?: string;
  /** The ID representing the change for the story. */
  id: string;
  /** The version of the change format. @default "v1" */
  version?: "v1";
  /** The ID of the webhook that handled the change. */
  webhookId?: string | null;
  /** The ID of the automation that performed the change. */
  automationId?: string;
};

const historyProperties: s.Shape<History> = {
  actorName: s.optional(s.string()),
  changedAt: s.string(),
  primaryId: s.optional(s.lazy(() => primaryIdSchema)),
  references: s.optional(s.array(s.lazy(() => referenceInternalSchema))),
  actions: s.array(s.lazy(() => action1InternalSchema)),
  memberId: s.optional(s.string()),
  externalId: s.optional(s.string()),
  id: s.string(),
  version: s.defaulted(s.literal("v1"), "v1"),
  webhookId: s.optionalNullable(s.string()),
  automationId: s.optional(s.string()),
  _keysMap: {
    actorName: "actor_name",
    changedAt: "changed_at",
    primaryId: "primary_id",
    memberId: "member_id",
    externalId: "external_id",
    webhookId: "webhook_id",
    automationId: "automation_id",
  },
};

export const historyInternalSchema: Schema<History> = s.object<History>(historyProperties);

export const historySchema: Schema<History> = s.lazySchema(() =>
  s.object<History>({
    ...historyProperties,
    references: s.optional(s.array(s.lazy(() => referenceSchema))),
    actions: s.array(s.lazy(() => action1Schema)),
  }),
);
