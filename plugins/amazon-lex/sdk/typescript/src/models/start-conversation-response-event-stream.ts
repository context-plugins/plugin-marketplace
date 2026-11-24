import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessDeniedExceptionSchema, type AccessDeniedException } from "./access-denied-exception.js";
import { audioResponseEventSchema, type AudioResponseEvent } from "./audio-response-event.js";
import { badGatewayExceptionSchema, type BadGatewayException } from "./bad-gateway-exception.js";
import {
  dependencyFailedExceptionSchema,
  type DependencyFailedException,
} from "./dependency-failed-exception.js";
import { heartbeatEventSchema, type HeartbeatEvent } from "./heartbeat-event.js";
import { intentResultEventSchema, type IntentResultEvent } from "./intent-result-event.js";
import {
  playbackInterruptionEventSchema,
  type PlaybackInterruptionEvent,
} from "./playback-interruption-event.js";
import {
  runtimeV2LexConflictExceptionSchema,
  type RuntimeV2LexConflictException,
} from "./runtime-v2-lex-conflict-exception.js";
import {
  runtimeV2LexInternalServerExceptionSchema,
  type RuntimeV2LexInternalServerException,
} from "./runtime-v2-lex-internal-server-exception.js";
import {
  runtimeV2LexResourceNotFoundExceptionSchema,
  type RuntimeV2LexResourceNotFoundException,
} from "./runtime-v2-lex-resource-not-found-exception.js";
import {
  runtimeV2LexThrottlingExceptionSchema,
  type RuntimeV2LexThrottlingException,
} from "./runtime-v2-lex-throttling-exception.js";
import {
  runtimeV2LexValidationExceptionSchema,
  type RuntimeV2LexValidationException,
} from "./runtime-v2-lex-validation-exception.js";
import { textResponseEventSchema, type TextResponseEvent } from "./text-response-event.js";
import { transcriptEventSchema, type TranscriptEvent } from "./transcript-event.js";

/** Exactly one member is set. */
export type StartConversationResponseEventStream = {
  playbackInterruptionEvent?: PlaybackInterruptionEvent;
  transcriptEvent?: TranscriptEvent;
  intentResultEvent?: IntentResultEvent;
  textResponseEvent?: TextResponseEvent;
  audioResponseEvent?: AudioResponseEvent;
  heartbeatEvent?: HeartbeatEvent;
  accessDeniedException?: AccessDeniedException;
  resourceNotFoundException?: RuntimeV2LexResourceNotFoundException;
  validationException?: RuntimeV2LexValidationException;
  throttlingException?: RuntimeV2LexThrottlingException;
  internalServerException?: RuntimeV2LexInternalServerException;
  conflictException?: RuntimeV2LexConflictException;
  dependencyFailedException?: DependencyFailedException;
  badGatewayException?: BadGatewayException;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startConversationResponseEventStreamSchema: Schema<StartConversationResponseEventStream> =
  s.object<StartConversationResponseEventStream>(
    {
      playbackInterruptionEvent: s.optional(s.lazy(() => playbackInterruptionEventSchema)),
      transcriptEvent: s.optional(s.lazy(() => transcriptEventSchema)),
      intentResultEvent: s.optional(s.lazy(() => intentResultEventSchema)),
      textResponseEvent: s.optional(s.lazy(() => textResponseEventSchema)),
      audioResponseEvent: s.optional(s.lazy(() => audioResponseEventSchema)),
      heartbeatEvent: s.optional(s.lazy(() => heartbeatEventSchema)),
      accessDeniedException: s.optional(s.lazy(() => accessDeniedExceptionSchema)),
      resourceNotFoundException: s.optional(s.lazy(() => runtimeV2LexResourceNotFoundExceptionSchema)),
      validationException: s.optional(s.lazy(() => runtimeV2LexValidationExceptionSchema)),
      throttlingException: s.optional(s.lazy(() => runtimeV2LexThrottlingExceptionSchema)),
      internalServerException: s.optional(s.lazy(() => runtimeV2LexInternalServerExceptionSchema)),
      conflictException: s.optional(s.lazy(() => runtimeV2LexConflictExceptionSchema)),
      dependencyFailedException: s.optional(s.lazy(() => dependencyFailedExceptionSchema)),
      badGatewayException: s.optional(s.lazy(() => badGatewayExceptionSchema)),
      _keysMap: {
        playbackInterruptionEvent: "PlaybackInterruptionEvent",
        transcriptEvent: "TranscriptEvent",
        intentResultEvent: "IntentResultEvent",
        textResponseEvent: "TextResponseEvent",
        audioResponseEvent: "AudioResponseEvent",
        heartbeatEvent: "HeartbeatEvent",
        accessDeniedException: "AccessDeniedException",
        resourceNotFoundException: "ResourceNotFoundException",
        validationException: "ValidationException",
        throttlingException: "ThrottlingException",
        internalServerException: "InternalServerException",
        conflictException: "ConflictException",
        dependencyFailedException: "DependencyFailedException",
        badGatewayException: "BadGatewayException",
      },
    },
    { additionalProperties: s.json() },
  );
