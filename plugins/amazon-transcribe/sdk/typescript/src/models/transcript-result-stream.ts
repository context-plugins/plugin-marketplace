import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { badRequestExceptionSchema, type BadRequestException } from "./bad-request-exception.js";
import { conflictExceptionSchema, type ConflictException } from "./conflict-exception.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "./internal-failure-exception.js";
import { limitExceededExceptionSchema, type LimitExceededException } from "./limit-exceeded-exception.js";
import {
  serviceUnavailableExceptionSchema,
  type ServiceUnavailableException,
} from "./service-unavailable-exception.js";
import { transcriptEventSchema, type TranscriptEvent } from "./transcript-event.js";

/** Exactly one member is set. */
export type TranscriptResultStream = {
  transcriptEvent?: TranscriptEvent;
  badRequestException?: BadRequestException;
  limitExceededException?: LimitExceededException;
  internalFailureException?: InternalFailureException;
  conflictException?: ConflictException;
  serviceUnavailableException?: ServiceUnavailableException;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptResultStreamSchema: Schema<TranscriptResultStream> = s.object<TranscriptResultStream>(
  {
    transcriptEvent: s.optional(s.lazy(() => transcriptEventSchema)),
    badRequestException: s.optional(s.lazy(() => badRequestExceptionSchema)),
    limitExceededException: s.optional(s.lazy(() => limitExceededExceptionSchema)),
    internalFailureException: s.optional(s.lazy(() => internalFailureExceptionSchema)),
    conflictException: s.optional(s.lazy(() => conflictExceptionSchema)),
    serviceUnavailableException: s.optional(s.lazy(() => serviceUnavailableExceptionSchema)),
    _keysMap: {
      transcriptEvent: "TranscriptEvent",
      badRequestException: "BadRequestException",
      limitExceededException: "LimitExceededException",
      internalFailureException: "InternalFailureException",
      conflictException: "ConflictException",
      serviceUnavailableException: "ServiceUnavailableException",
    },
  },
  { additionalProperties: s.json() },
);
