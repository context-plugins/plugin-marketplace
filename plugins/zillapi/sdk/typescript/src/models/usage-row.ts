import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actorSchema, type Actor } from "./actor.js";

export type UsageRow = {
  id?: number;
  endpoint?: string;
  actor?: Actor;
  units?: number;
  statusCode?: number;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageRowSchema: Schema<UsageRow> = s.object<UsageRow>(
  {
    id: s.optional(s.int()),
    endpoint: s.optional(s.string()),
    actor: s.optional(s.lazy(() => actorSchema)),
    units: s.optional(s.int()),
    statusCode: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      statusCode: "status_code",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
