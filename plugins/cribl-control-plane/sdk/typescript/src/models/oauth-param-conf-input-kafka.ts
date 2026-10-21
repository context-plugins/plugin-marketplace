import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OauthParamConfInputKafka = {
  /** Parameter Name */
  name: string;
  /** Parameter Value */
  value: string;
};

export const oauthParamConfInputKafkaSchema: Schema<OauthParamConfInputKafka> =
  s.object<OauthParamConfInputKafka>({
    name: s.string(),
    value: s.string(),
  });
