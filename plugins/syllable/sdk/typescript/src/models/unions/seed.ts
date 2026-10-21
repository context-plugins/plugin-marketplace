import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Deprecated by Syllable; leave unset for new configurations. Retained for backward compatibility
 * where supported, without a guarantee of identical responses. OpenAI and Azure OpenAI Chat
 * Completions offer best-effort seed support on supported models; Responses does not support seed.
 * Anthropic does not support seed as a sampling parameter. Google support depends on the model and
 * API. A saved value does not establish the endpoint or seed handling of a past request, and
 * sending seed does not prove that a provider honored it.
 */
export type Seed = number;

export const seedSchema: Schema<Seed> = s.of<Seed>(s.union([s.int()]));
