import type { HttpMethod } from "./api-request.js";
import {
  attachmentDisposition,
  concatStream,
  resolveFile,
  type BufferedResolvedFile,
  type ByteSource,
  type FileInput,
  type ResolvedFile,
} from "./binary.js";
import { EncodeError } from "./errors.js";
import type { Param, ParamValue, StyledParam } from "./param-value.js";
import { flattenParams, isScalar, jsonValue, scalar } from "./param-value.js";
import { formString } from "./params.js";
import type { Entry } from "./validation/schema.js";
import { SchemaError, encodeEntry } from "./validation/schema-error.js";

export type Json = string | number | boolean | null | readonly Json[] | JsonObject;

export type JsonObject = { readonly [key: string]: Json | undefined };

export type ContentType =
  | "application/x-www-form-urlencoded;charset=UTF-8"
  | "application/json"
  | "text/plain;charset=utf-8"
  | "application/octet-stream"
  | `multipart/form-data; boundary=${string}`
  | (string & {});

export type BodyContent = {
  body: string | FormData | Blob | Uint8Array<ArrayBuffer> | ReadableStream<Uint8Array> | null;
  contentType?: ContentType;
  contentDisposition?: string;
  streaming?: true;
};

export type EmptyBody = {
  readonly kind: "empty";
};

export type JsonBody = {
  readonly kind: "json";
  readonly value: unknown;
  readonly schema: Entry<unknown>;
};

export type FormUrlEncodedBody = {
  readonly kind: "formUrlEncoded";
  readonly value: readonly StyledParam[];
};

export type TextBody = {
  readonly kind: "text";
  readonly value: unknown;
  readonly schema: Entry<unknown>;
};

export type MultipartTextPart = StyledParam & {
  readonly kind: "text";
};

export type MultipartJsonPart = Param & {
  readonly kind: "json";
  readonly contentType: "application/json" | `application/${string}+json`;
};

export type MultipartFilePart = {
  readonly kind: "file";
  readonly name: string;
  readonly value: FileInput | readonly (FileInput | null | undefined)[] | null | undefined;
  readonly contentType?: string | undefined;
};

export type MultipartPart = MultipartTextPart | MultipartJsonPart | MultipartFilePart;

export type MultipartBody = {
  readonly kind: "multipart";
  readonly value: readonly MultipartPart[];
};

export type BinaryBody = {
  readonly kind: "binary";
  readonly value: FileInput | null | undefined;
  readonly contentType: string;
};

export type RequestBody = EmptyBody | JsonBody | FormUrlEncodedBody | TextBody | MultipartBody | BinaryBody;

export function buildBody(
  method: HttpMethod,
  uri: string,
  body: RequestBody,
  signal?: AbortSignal,
): BodyContent {
  switch (body.kind) {
    case "empty":
      return { body: null };
    case "json":
      return buildJson(body, method, uri);
    case "formUrlEncoded":
      return buildFormUrlEncoded(body, method, uri);
    case "text":
      return buildText(body, method, uri);
    case "multipart":
      return buildMultipart(body, signal, method, uri);
    case "binary":
      return buildBinary(body, signal);
    default:
      return unknownBodyKind(body);
  }
}

function unknownBodyKind(body: never): never {
  const kind = (body as { kind?: unknown }).kind;
  throw new TypeError(`Unsupported request body kind: ${String(kind)}`);
}

function encodeFailure(err: unknown, method: HttpMethod, uri: string): EncodeError {
  if (!(err instanceof SchemaError)) throw err;
  return new EncodeError(`${method} ${uri} failed: Request value could not be encoded.`, {
    cause: err,
    method,
    uri,
  });
}

function buildFormUrlEncoded(body: FormUrlEncodedBody, method: HttpMethod, uri: string): BodyContent {
  let text: string;
  try {
    text = formString(body.value);
  } catch (err) {
    throw encodeFailure(err, method, uri);
  }
  return { body: text, contentType: "application/x-www-form-urlencoded;charset=UTF-8" };
}

function buildJson(body: JsonBody, method: HttpMethod, uri: string): BodyContent {
  let encoded: unknown;
  try {
    encoded = encodeEntry(body.schema, body.value);
  } catch (err) {
    throw encodeFailure(err, method, uri);
  }
  const text = JSON.stringify(encoded);
  if (text === undefined) return { body: null };
  return { body: text, contentType: "application/json" };
}

function buildBinary(body: BinaryBody, signal: AbortSignal | undefined): BodyContent {
  if (body.value === undefined || body.value === null) return { body: null };

  const file = resolveFile(body.value, body.contentType, signal);
  const content: BodyContent = { body: file.body };
  if (file.contentType !== undefined) content.contentType = file.contentType;
  const disposition = attachmentDisposition(file.fileName);
  if (disposition !== undefined) content.contentDisposition = disposition;
  if (file.streaming) content.streaming = true;
  return content;
}

function buildText(body: TextBody, method: HttpMethod, uri: string): BodyContent {
  let encoded: ParamValue;
  try {
    encoded = encodeEntry(body.schema, body.value) as ParamValue;
  } catch (err) {
    throw encodeFailure(err, method, uri);
  }
  if (encoded === undefined) return { body: null };
  return {
    body: isScalar(encoded) ? scalar(encoded) : jsonValue(encoded),
    contentType: "text/plain;charset=utf-8",
  };
}

type MultipartEntry<File extends ResolvedFile = ResolvedFile> =
  | { readonly kind: "text"; readonly name: string; readonly value: string }
  | { readonly kind: "json"; readonly name: string; readonly value: string; readonly contentType: string }
  | { readonly kind: "file"; readonly name: string; readonly file: File };

function buildMultipart(
  body: MultipartBody,
  signal: AbortSignal | undefined,
  method: HttpMethod,
  uri: string,
): BodyContent {
  let entries: readonly MultipartEntry[];
  try {
    entries = body.value.flatMap(partEntries);
  } catch (err) {
    throw encodeFailure(err, method, uri);
  }
  if (allBuffered(entries)) return { body: toFormData(entries) };

  const boundary = `----${crypto.randomUUID()}`;
  return {
    body: frameMultipart(entries, boundary, signal),
    contentType: `multipart/form-data; boundary=${boundary}`,
    streaming: true,
  };
}

function partEntries(part: MultipartPart): readonly MultipartEntry[] {
  switch (part.kind) {
    case "text":
      return flattenParams([part]).map(([name, value]) => ({ kind: "text", name, value }));
    case "json": {
      const encoded = encodeEntry(part.schema, part.value);
      const entries: MultipartEntry[] = [];
      for (const document of Array.isArray(encoded) ? encoded : [encoded]) {
        const value = JSON.stringify(document);
        if (value === undefined) continue;
        entries.push({ kind: "json", name: part.name, value, contentType: part.contentType });
      }
      return entries;
    }
    case "file": {
      const entries: MultipartEntry[] = [];
      for (const input of Array.isArray(part.value) ? part.value : [part.value]) {
        if (input === undefined || input === null) continue;
        entries.push({ kind: "file", name: part.name, file: resolveFile(input, part.contentType) });
      }
      return entries;
    }
    default:
      return unknownPartKind(part);
  }
}

function allBuffered(
  entries: readonly MultipartEntry[],
): entries is readonly MultipartEntry<BufferedResolvedFile>[] {
  return entries.every((entry) => entry.kind !== "file" || !entry.file.streaming);
}

function toFormData(entries: readonly MultipartEntry<BufferedResolvedFile>[]): FormData {
  const form = new FormData();
  for (const entry of entries) {
    if (entry.kind === "text") {
      form.append(entry.name, entry.value);
    } else if (entry.kind === "json") {
      form.append(entry.name, new Blob([entry.value], { type: entry.contentType }), "");
    } else {
      const { body, contentType, fileName } = entry.file;
      form.append(entry.name, new Blob([body], { type: contentType ?? "" }), fileName ?? "");
    }
  }
  return form;
}

function frameMultipart(
  entries: readonly MultipartEntry[],
  boundary: string,
  signal: AbortSignal | undefined,
): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const segments: ByteSource[] = [];
  for (const entry of entries) {
    const name = escapeParameter(normalizeNewlines(entry.name));
    const disposition = `--${boundary}\r\nContent-Disposition: form-data; name="${name}"`;
    if (entry.kind === "text") {
      segments.push(encoder.encode(`${disposition}\r\n\r\n${normalizeNewlines(entry.value)}\r\n`));
    } else if (entry.kind === "json") {
      const contentType = partContentType(entry.contentType);
      segments.push(
        encoder.encode(`${disposition}\r\nContent-Type: ${contentType}\r\n\r\n${entry.value}\r\n`),
      );
    } else {
      const { body, contentType, fileName } = entry.file;
      const filename =
        fileName === undefined || fileName === "" ? "" : `; filename="${escapeParameter(fileName)}"`;
      segments.push(
        encoder.encode(`${disposition}${filename}\r\nContent-Type: ${partContentType(contentType)}\r\n\r\n`),
        body,
        encoder.encode("\r\n"),
      );
    }
  }
  segments.push(encoder.encode(`--${boundary}--\r\n`));
  return concatStream(segments, signal);
}

function normalizeNewlines(value: string): string {
  return value.replace(/\r\n|\r|\n/g, "\r\n");
}

function escapeParameter(value: string): string {
  return value.replaceAll('"', "%22").replaceAll("\r", "%0D").replaceAll("\n", "%0A");
}

const PRINTABLE_ASCII = /^[ -~]*$/;

function partContentType(type: string | undefined): string {
  if (type === undefined || type === "" || !PRINTABLE_ASCII.test(type)) return "application/octet-stream";
  return type.toLowerCase();
}

function unknownPartKind(part: never): never {
  const kind = (part as { kind?: unknown }).kind;
  throw new TypeError(`Unsupported multipart part kind: ${String(kind)}`);
}
