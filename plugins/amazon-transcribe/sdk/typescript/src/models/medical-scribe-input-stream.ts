import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { medicalScribeAudioEventSchema, type MedicalScribeAudioEvent } from "./medical-scribe-audio-event.js";
import {
  medicalScribeConfigurationEventSchema,
  type MedicalScribeConfigurationEvent,
} from "./medical-scribe-configuration-event.js";
import {
  medicalScribeSessionControlEventSchema,
  type MedicalScribeSessionControlEvent,
} from "./medical-scribe-session-control-event.js";

/** Exactly one member is set. */
export type MedicalScribeInputStream = {
  audioEvent?: MedicalScribeAudioEvent;
  sessionControlEvent?: MedicalScribeSessionControlEvent;
  configurationEvent?: MedicalScribeConfigurationEvent;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeInputStreamSchema: Schema<MedicalScribeInputStream> =
  s.object<MedicalScribeInputStream>(
    {
      audioEvent: s.optional(s.lazy(() => medicalScribeAudioEventSchema)),
      sessionControlEvent: s.optional(s.lazy(() => medicalScribeSessionControlEventSchema)),
      configurationEvent: s.optional(s.lazy(() => medicalScribeConfigurationEventSchema)),
      _keysMap: {
        audioEvent: "AudioEvent",
        sessionControlEvent: "SessionControlEvent",
        configurationEvent: "ConfigurationEvent",
      },
    },
    { additionalProperties: s.json() },
  );
