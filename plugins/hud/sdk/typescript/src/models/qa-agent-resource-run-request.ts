import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Run a resource-scoped agent against canonical subjects. */
export type QaAgentResourceRunRequest = {
  subjectIds: string[];
  /** @default true */
  overwrite?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qaAgentResourceRunRequestProperties: s.Shape<QaAgentResourceRunRequest> = {
  subjectIds: s.array(s.string()),
  overwrite: s.defaulted(s.boolean(), true),
  _keysMap: {
    subjectIds: "subject_ids",
  },
};

export const qaAgentResourceRunRequestInternalSchema: Schema<QaAgentResourceRunRequest> =
  s.object<QaAgentResourceRunRequest>(qaAgentResourceRunRequestProperties, {
    additionalProperties: s.json(),
  });

export const qaAgentResourceRunRequestSchema: Schema<QaAgentResourceRunRequest> = s.lazySchema(() =>
  s.object<QaAgentResourceRunRequest>(
    {
      ...qaAgentResourceRunRequestProperties,
      subjectIds: s.array(s.string()).check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
