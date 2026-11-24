import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Node = {
  /** The image ID used */
  imageId?: string;
  /** The SSH port */
  port?: number;
  /** The public IP address */
  publicIpAddr?: string;
  /** The SSH username */
  username?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nodeSchema: Schema<Node> = s.object<Node>(
  {
    imageId: s.optional(s.string()),
    port: s.optional(s.int()),
    publicIpAddr: s.optional(s.string()),
    username: s.optional(s.string()),
    _keysMap: {
      imageId: "image_id",
      publicIpAddr: "public_ip_addr",
    },
  },
  { additionalProperties: s.json() },
);
