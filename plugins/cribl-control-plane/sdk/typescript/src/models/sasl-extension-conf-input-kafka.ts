import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaslExtensionConfInputKafka = {
  /** Field Name */
  name: string;
  /** Field Value */
  value: string;
};

export const saslExtensionConfInputKafkaSchema: Schema<SaslExtensionConfInputKafka> =
  s.object<SaslExtensionConfInputKafka>({
    name: s.string(),
    value: s.string(),
  });
