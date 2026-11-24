import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { choiceSchema, type Choice } from "./choice.js";
import { fieldBasisSchema, type FieldBasis } from "./field-basis.js";
import { interactionIdSchema, type InteractionId } from "./unions/interaction-id.js";
import { moderation2Schema, type Moderation2 } from "./unions/moderation2.js";
import { serviceTier1Schema, type ServiceTier1 } from "./unions/service-tier1.js";
import { systemFingerprintSchema, type SystemFingerprint } from "./unions/system-fingerprint.js";
import { usageSchema, type Usage } from "./unions/usage.js";

/** Chat completion response chunk. */
export type ChatCompletionResponseChunk = {
  /** The id of the chat completion response chunk. */
  id: string;
  choices: Choice[];
  created: number;
  model: string;
  /** @default "chat.completion.chunk" */
  object?: "chat.completion.chunk";
  moderation?: Moderation2;
  serviceTier?: ServiceTier1;
  systemFingerprint?: SystemFingerprint;
  usage?: Usage;
  /**
   * The type of the chat completion chunk. Always `chat.completion.chunk`.
   *
   * @default "chat.completion.chunk"
   */
  type?: "chat.completion.chunk";
  /**
   * Basis for the chat completion chunk, including citations and reasoning supporting the output.
   */
  basis?: FieldBasis[];
  /** Identifier for this interaction. Pass as previous_interaction_id for follow-ups. */
  interactionId?: InteractionId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatCompletionResponseChunkSchema: Schema<ChatCompletionResponseChunk> =
  s.object<ChatCompletionResponseChunk>(
    {
      id: s.string(),
      choices: s.array(s.lazy(() => choiceSchema)),
      created: s.int(),
      model: s.string(),
      object: s.defaulted(s.literal("chat.completion.chunk"), "chat.completion.chunk"),
      moderation: s.optional(s.lazy(() => moderation2Schema)),
      serviceTier: s.optional(s.lazy(() => serviceTier1Schema)),
      systemFingerprint: s.optional(s.lazy(() => systemFingerprintSchema)),
      usage: s.optional(s.lazy(() => usageSchema)),
      type: s.defaulted(s.literal("chat.completion.chunk"), "chat.completion.chunk"),
      basis: s.optional(s.array(s.lazy(() => fieldBasisSchema))),
      interactionId: s.optional(s.lazy(() => interactionIdSchema)),
      _keysMap: {
        serviceTier: "service_tier",
        systemFingerprint: "system_fingerprint",
        interactionId: "interaction_id",
      },
    },
    { additionalProperties: s.json() },
  );
