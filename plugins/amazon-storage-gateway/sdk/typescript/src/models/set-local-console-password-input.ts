import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SetLocalConsolePasswordInput = {
  gatewayArn: string;
  /** The password you want to set for your VM local console. */
  localConsolePassword: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setLocalConsolePasswordInputSchema: Schema<SetLocalConsolePasswordInput> =
  s.object<SetLocalConsolePasswordInput>(
    {
      gatewayArn: s.string(),
      localConsolePassword: s.string(),
      _keysMap: {
        gatewayArn: "GatewayARN",
        localConsolePassword: "LocalConsolePassword",
      },
    },
    { additionalProperties: s.json() },
  );
