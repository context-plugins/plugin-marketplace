import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PlaybooksStartRequest = {
  /** A name for this run, such as Onboard Northwind; the playbook's title when omitted */
  title?: string;
  /** The playbook's inputs, by name */
  inputs?: Record<string, string>;
  workspaceId?: string;
  /** The project this run's approvals and reviews belong to */
  flowId?: string;
  /** Your own reference; an open run you started under it is returned instead of a second */
  externalId?: string;
  sessionUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PlaybooksStartRequestProperties: s.Shape<ApiV1PlaybooksStartRequest> = {
  title: s.optional(s.string()),
  inputs: s.optional(s.record(s.string(), s.string())),
  workspaceId: s.optional(s.string()),
  flowId: s.optional(s.string()),
  externalId: s.optional(s.string()),
  sessionUrl: s.optional(s.string()),
};

export const apiV1PlaybooksStartRequestInternalSchema: Schema<ApiV1PlaybooksStartRequest> =
  s.object<ApiV1PlaybooksStartRequest>(apiV1PlaybooksStartRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1PlaybooksStartRequestSchema: Schema<ApiV1PlaybooksStartRequest> = s.lazySchema(() =>
  s.object<ApiV1PlaybooksStartRequest>(
    {
      ...apiV1PlaybooksStartRequestProperties,
      title: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      inputs: s.optional(s.record(s.string(), s.string().check(s.maxLength(1000)))),
      externalId: s.optional(s.string().check(s.maxLength(200))),
      sessionUrl: s.optional(s.string().check(s.maxLength(2000), s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
