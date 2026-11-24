import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Type, typeSchema } from "./type.js";

export type Zone = {
  /** Index in the signers array (0-based) */
  signerIndex: number;
  /** Page number */
  page: number;
  /** X position (% from left) */
  x: number;
  /** Y position (% from top) */
  y: number;
  /** Width (% of page) */
  width: number;
  /** Height (% of page) */
  height: number;
  /**
   * Field type. 'date' is always auto-filled at signing time, never editable by the signer.
   *
   * @default Type.Signature
   */
  type?: Type;
  /** Instruction shown to the signer. Required when type is 'text' or 'checkbox'. */
  label?: string;
  /**
   * For 'text'/'checkbox' zones only: blocks signing until filled. Ignored for 'signature'/'date'.
   *
   * @default true
   */
  required?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const zoneProperties: s.Shape<Zone> = {
  signerIndex: s.int(),
  page: s.int(),
  x: s.float64(),
  y: s.float64(),
  width: s.float64(),
  height: s.float64(),
  type: s.defaulted(typeSchema, Type.Signature),
  label: s.optional(s.string()),
  required: s.defaulted(s.boolean(), true),
  _keysMap: {
    signerIndex: "signer_index",
  },
};

export const zoneInternalSchema: Schema<Zone> = s.object<Zone>(zoneProperties, {
  additionalProperties: s.json(),
});

export const zoneSchema: Schema<Zone> = s.lazySchema(() =>
  s.object<Zone>(
    {
      ...zoneProperties,
      signerIndex: s.int().check(s.gte(0)),
      page: s.int().check(s.gte(1)),
      x: s.float64().check(s.gte(0), s.lte(100)),
      y: s.float64().check(s.gte(0), s.lte(100)),
      width: s.float64().check(s.gte(1), s.lte(100)),
      height: s.float64().check(s.gte(1), s.lte(100)),
      label: s.optional(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
