import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { findAllRunStatus2Schema, type FindAllRunStatus2 } from "./find-all-run-status2.js";
import { generator1Schema, type Generator1 } from "./generator1.js";
import { createdAtSchema, type CreatedAt } from "./unions/created-at.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { modifiedAtSchema, type ModifiedAt } from "./unions/modified-at.js";

/** FindAll run object with status and metadata. */
export type FindAllRun = {
  /** ID of the FindAll run. */
  findallId: string;
  /** Status object for the FindAll run. */
  status: FindAllRunStatus2;
  /** Generator for the FindAll run. */
  generator: Generator1;
  /** Metadata for the FindAll run. */
  metadata?: Metadata;
  /** Timestamp of the creation of the run, in RFC 3339 format. */
  createdAt?: CreatedAt;
  /** Timestamp of the latest modification to the FindAll run result, in RFC 3339 format. */
  modifiedAt?: ModifiedAt;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllRunSchema: Schema<FindAllRun> = s.object<FindAllRun>(
  {
    findallId: s.string(),
    status: findAllRunStatus2Schema,
    generator: generator1Schema,
    metadata: s.optional(s.lazy(() => metadataSchema)),
    createdAt: s.optional(s.lazy(() => createdAtSchema)),
    modifiedAt: s.optional(s.lazy(() => modifiedAtSchema)),
    _keysMap: {
      findallId: "findall_id",
      createdAt: "created_at",
      modifiedAt: "modified_at",
    },
  },
  { additionalProperties: s.json() },
);
