import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents an ObjectId (see also BsonObjectId). */
export type ObjectId = {
  /** Gets the timestamp. */
  timestamp?: number;
  /**
   * Gets the machine.
   *
   * @deprecated
   */
  machine?: number;
  /**
   * Gets the PID.
   *
   * @deprecated
   */
  pid?: number;
  /**
   * Gets the increment.
   *
   * @deprecated
   */
  increment?: number;
  /** Gets the creation time (derived from the timestamp). */
  creationTime?: Date;
};

export const objectIdSchema: Schema<ObjectId> = s.object<ObjectId>({
  timestamp: s.optional(s.int()),
  machine: s.optional(s.int()),
  pid: s.optional(s.int()),
  increment: s.optional(s.int()),
  creationTime: s.optional(s.dateTime()),
  _keysMap: {
    timestamp: "Timestamp",
    machine: "Machine",
    pid: "Pid",
    increment: "Increment",
    creationTime: "CreationTime",
  },
});
