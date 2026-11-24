import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MedicalScribeSessionControlEvent = {
  /**
   * The type of MedicalScribeSessionControlEvent. Possible Values: END_OF_SESSION - Indicates the
   * audio streaming is complete. After you send an END_OF_SESSION event, Amazon Web Services
   * HealthScribe starts the post-stream analytics. The session can't be resumed after this event is
   * sent. After Amazon Web Services HealthScribe processes the event, the real-time StreamStatus is
   * COMPLETED. You get the StreamStatus and other stream details with the GetMedicalScribeStream
   * API operation. For more information about different streaming statuses, see the StreamStatus
   * description in the MedicalScribeStreamD
   *
   * @default "END_OF_SESSION"
   */
  type?: "END_OF_SESSION";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeSessionControlEventSchema: Schema<MedicalScribeSessionControlEvent> =
  s.object<MedicalScribeSessionControlEvent>(
    {
      type: s.defaulted(s.literal("END_OF_SESSION"), "END_OF_SESSION"),
      _keysMap: {
        type: "Type",
      },
    },
    { additionalProperties: s.json() },
  );
