import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectProjectSshKeyRequest = {
  /** The hostname the key is associated with */
  hostname: string;
  /** The private key in PEM format */
  privateKey: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectProjectSshKeyRequestSchema: Schema<ProjectProjectSshKeyRequest> =
  s.object<ProjectProjectSshKeyRequest>(
    {
      hostname: s.string(),
      privateKey: s.string(),
      _keysMap: {
        privateKey: "private_key",
      },
    },
    { additionalProperties: s.json() },
  );
