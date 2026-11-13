import * as zod from "zod/v4-mini";
import type { ZodMiniType } from "zod/v4-mini";
import { resolve, type Encoded, type Entry, type Schema } from "./schema.js";

export function lazy<T>(target: () => Schema<T, Encoded<T>>): ZodMiniType<T, Encoded<T>> {
  return zod.lazy(() => resolve(target()));
}

export function defaulted<T>(entry: Entry<T, Encoded<T>>, value: T): ZodMiniType<T, Encoded<T>> {
  return zod.codec(zod.optional(resolve(entry)), zod.custom<T>(), {
    decode: (given: T | undefined) => (given === undefined ? value : given),
    encode: (given: T | undefined) => (given === undefined ? value : given),
  }) as unknown as ZodMiniType<T, Encoded<T>>;
}

export function fallback<T>(entry: Entry<T, Encoded<T>>, value: T): ZodMiniType<T, Encoded<T>> {
  return zod.catch(resolve(entry), () => value);
}

export function callback<T extends (...args: never[]) => unknown>(): ZodMiniType<T, T> {
  return zod.custom<T>((value) => typeof value === "function");
}

export function optionalNullable<T>(
  entry: Entry<T, Encoded<T>>,
): ZodMiniType<T | null | undefined, Encoded<T> | null | undefined> {
  return zod.optional(zod.nullable(resolve(entry)));
}

export const dateTime = (): ZodMiniType<Date, string> =>
  zod.codec(zod.iso.datetime({ offset: true }), zod.date(), {
    decode: (value) => new Date(value),
    encode: (date) => date.toISOString(),
  });

const IMF_FIXDATE =
  /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), \d{2} (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4} \d{2}:\d{2}:\d{2} GMT$/;

export const rfc1123DateTime = (): ZodMiniType<Date, string> =>
  zod.codec(zod.string().check(zod.regex(IMF_FIXDATE)), zod.date(), {
    decode: (value) => new Date(value),
    encode: (date) => date.toUTCString(),
  });

const EPOCH_SECONDS = /^-?\d+(?:\.\d+)?$/;

export const unixSecondsDateTime = (): ZodMiniType<Date, number> =>
  zod.codec(zod.union([zod.number(), zod.string().check(zod.regex(EPOCH_SECONDS))]), zod.date(), {
    decode: (value) => new Date(Number(value) * 1000),
    encode: (date) => Math.floor(date.getTime() / 1000),
  }) as unknown as ZodMiniType<Date, number>;

export const dateOnly = (): ZodMiniType<string, string> => zod.iso.date();

const BYTES = zod.custom<Uint8Array>((value) => value instanceof Uint8Array);

const BASE64URL = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2}(?:==)?|[A-Za-z0-9_-]{3}=?)?$/;
const BASE32 =
  /^(?:[A-Za-z2-7]{8})*(?:[A-Za-z2-7]{2}={6}|[A-Za-z2-7]{4}={4}|[A-Za-z2-7]{5}={3}|[A-Za-z2-7]{7}=)?$/;
const BASE32HEX =
  /^(?:[0-9A-Va-v]{8})*(?:[0-9A-Va-v]{2}={6}|[0-9A-Va-v]{4}={4}|[0-9A-Va-v]{5}={3}|[0-9A-Va-v]{7}=)?$/;
const BASE16 = /^(?:[0-9A-Fa-f]{2})*$/;

const BASE32_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
const BASE32HEX_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUV";

export const bytes = (): ZodMiniType<Uint8Array, string> =>
  zod.codec(zod.base64(), BYTES, {
    decode: (value) => decodeBase64(value),
    encode: (value) => encodeBase64(value),
  });

export const base64UrlBytes = (): ZodMiniType<Uint8Array, string> =>
  zod.codec(zod.string().check(zod.regex(BASE64URL)), BYTES, {
    decode: (value) => decodeBase64(padBase64(value.replace(/-/g, "+").replace(/_/g, "/"))),
    encode: (value) => encodeBase64(value).replace(/\+/g, "-").replace(/\//g, "_"),
  });

export const base32Bytes = (): ZodMiniType<Uint8Array, string> =>
  zod.codec(zod.string().check(zod.regex(BASE32)), BYTES, {
    decode: (value) => decodeBase32(value, BASE32_ALPHABET),
    encode: (value) => encodeBase32(value, BASE32_ALPHABET),
  });

export const base32HexBytes = (): ZodMiniType<Uint8Array, string> =>
  zod.codec(zod.string().check(zod.regex(BASE32HEX)), BYTES, {
    decode: (value) => decodeBase32(value, BASE32HEX_ALPHABET),
    encode: (value) => encodeBase32(value, BASE32HEX_ALPHABET),
  });

export const base16Bytes = (): ZodMiniType<Uint8Array, string> =>
  zod.codec(zod.string().check(zod.regex(BASE16)), BYTES, {
    decode: (value) => decodeBase16(value),
    encode: (value) => encodeBase16(value),
  });

function decodeBase64(value: string): Uint8Array {
  const latin1 = atob(value);
  const bytes = new Uint8Array(latin1.length);
  for (let index = 0; index < latin1.length; index++) bytes[index] = latin1.charCodeAt(index);
  return bytes;
}

function encodeBase64(value: Uint8Array): string {
  let latin1 = "";
  for (const byte of value) latin1 += String.fromCharCode(byte);
  return btoa(latin1);
}

function padBase64(value: string): string {
  const remainder = value.length % 4;
  return remainder === 0 ? value : `${value}${"=".repeat(4 - remainder)}`;
}

function decodeBase32(value: string, alphabet: string): Uint8Array {
  const text = value.replace(/=+$/, "").toUpperCase();
  const bytes = new Uint8Array((text.length * 5) >> 3);
  let accumulator = 0;
  let bits = 0;
  let offset = 0;

  for (const char of text) {
    accumulator = (accumulator << 5) | alphabet.indexOf(char);
    bits += 5;
    if (bits < 8) continue;
    bits -= 8;
    bytes[offset] = (accumulator >> bits) & 0xff;
    offset += 1;
  }
  return bytes;
}

function encodeBase32(value: Uint8Array, alphabet: string): string {
  let text = "";
  let accumulator = 0;
  let bits = 0;

  for (const byte of value) {
    accumulator = (accumulator << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      bits -= 5;
      text += alphabet[(accumulator >> bits) & 0x1f];
    }
  }
  if (bits > 0) text += alphabet[(accumulator << (5 - bits)) & 0x1f];
  return text.padEnd(Math.ceil(text.length / 8) * 8, "=");
}

function decodeBase16(value: string): Uint8Array {
  const bytes = new Uint8Array(value.length / 2);
  for (let index = 0; index < bytes.length; index++) {
    bytes[index] = Number.parseInt(value.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

function encodeBase16(value: Uint8Array): string {
  let text = "";
  for (const byte of value) text += byte.toString(16).toUpperCase().padStart(2, "0");
  return text;
}
