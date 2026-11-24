import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { typeSchema, type Type } from "./type.js";

/** A Boomi Atom — the lightweight runtime engine that executes integration processes. */
export type Atom = {
  /** Unique identifier of the Atom. */
  id?: string;
  /** Display name of the Atom. */
  name?: string;
  /** Current online/offline status of the Atom. */
  status?: Status;
  /** Atom type. */
  type?: Type;
  /** Hostname of the machine running the Atom. */
  hostName?: string;
  /** Current Boomi runtime version installed on the Atom. */
  currentVersion?: string;
  /** Timestamp when the Atom was installed. */
  dateInstalled?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const atomSchema: Schema<Atom> = s.object<Atom>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    type: s.optional(s.lazy(() => typeSchema)),
    hostName: s.optional(s.string()),
    currentVersion: s.optional(s.string()),
    dateInstalled: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
