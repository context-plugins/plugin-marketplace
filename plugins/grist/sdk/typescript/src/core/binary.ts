import { CoreError, DecodeError } from "./errors.js";
import type { HttpMethod } from "./api-request.js";
import type { BinaryResponseDecoder } from "./response-decoder.js";

/**
 * Bytes, in any form the platform can send.
 *
 * @remarks
 * Bytes, not a file: nothing here carries a name or a media type. Wrap them in {@link FileData}
 * to attach either.
 *
 * A `ReadableStream` streams the request rather than buffering it: the fetch is sent with
 * `duplex: "half"`, and the body cannot be replayed, so a retry would have nothing left to send.
 * That holds for a multipart file part too: one streaming part makes the SDK frame the whole form
 * itself as a single chunked stream, taking the `Content-Length` and the replayability with it.
 *
 * If the request is aborted or times out mid-upload the SDK stops reading within one chunk and
 * hands the lock back, so the source is yours again to cancel or dispose from the `catch`. It is
 * never cancelled on your behalf — the SDK closes only what it opened. A stream that was fully
 * sent stays locked, which is the platform's own guard against sending a spent body twice.
 *
 * The async-iterable arm is what a Node stream satisfies, so `createReadStream(path)` can be
 * passed straight in and is forwarded chunk by chunk rather than buffered, under that same
 * one-shot rule. It is spelled structurally on purpose: naming Node's `Readable` would put
 * `@types/node` in the published declarations, which the DOM typecheck lane exists to prevent.
 */
export type BinaryData =
  | Blob
  | Uint8Array<ArrayBuffer>
  | ArrayBuffer
  | ReadableStream<Uint8Array>
  | AsyncIterable<Uint8Array<ArrayBuffer>>;

/**
 * Bytes plus the name and media type to declare for them — what turns {@link BinaryData} into a
 * file, as the platform's own `File` does to a `Blob`.
 *
 * @remarks
 * Wrap a {@link BinaryData} in this to send a `Content-Disposition` filename, or to override the
 * media type the operation declares. Both are optional, and a `Blob` that already carries a `type`
 * or a `name` supplies them on its own.
 */
export type FileData = {
  readonly data: BinaryData;
  readonly fileName?: string | undefined;
  readonly contentType?: string | undefined;
};

/** A file to send: bare {@link BinaryData} bytes, or a {@link FileData} that names them. */
export type FileInput = BinaryData | FileData;

export type BufferedResolvedFile = {
  readonly body: Blob | Uint8Array<ArrayBuffer>;
  readonly contentType: string | undefined;
  readonly fileName: string | undefined;
  readonly streaming: false;
};

export type StreamingResolvedFile = {
  readonly body: ReadableStream<Uint8Array>;
  readonly contentType: string | undefined;
  readonly fileName: string | undefined;
  readonly streaming: true;
};

export type ResolvedFile = BufferedResolvedFile | StreamingResolvedFile;

export type ByteSource = Blob | Uint8Array<ArrayBuffer> | ReadableStream<Uint8Array>;

/**
 * An error response whose body is bytes rather than JSON, buffered in full.
 *
 * @remarks
 * Unlike a binary *success* body this is a value, not a resource: a thrown error's payload has no
 * lifetime, so the bytes are read before the rejection surfaces and there is nothing to release.
 */
export type BinaryErrorContent = {
  readonly bytes: Uint8Array<ArrayBuffer>;
  readonly contentType: string | undefined;
  readonly fileName: string | undefined;
};

/**
 * A binary response body you own — a handle over the still-open connection, not bytes.
 *
 * @remarks
 * The body arrives as an unread `ReadableStream` and is handled the way any web stream is: buffer
 * it with `new Response(file.stream)` and one of `bytes()`, `text()` or `blob()`, read it chunk by
 * chunk with a reader or `for await`, or release it unread with `file.stream.cancel()`. Once a
 * reader holds the lock, cancel through the reader instead. The stream is the response body
 * itself, so an abort or a dropped connection surfaces on it as the platform reports it: an abort
 * as the signal's `reason` when `fetch` ties the body to the signal, a dropped connection as the
 * platform's own error.
 */
export type BinaryContent = {
  /**
   * The body, unread — a web `ReadableStream` whose lifetime is yours.
   */
  readonly stream: ReadableStream<Uint8Array<ArrayBuffer>>;

  /** The media type the server declared, or the operation's declared type when it declared none. */
  readonly contentType: string;

  /**
   * The name from `Content-Disposition`, when the response carried one.
   *
   * @remarks
   * Server-chosen, and therefore **untrusted input**. Never use it as a path: sanitize it, or name
   * the file yourself.
   */
  readonly fileName: string | undefined;
};

export function readBinary(decoder: BinaryResponseDecoder, response: Response): BinaryContent {
  const contentType = response.headers.get("content-type") ?? decoder.contentType;
  const fileName = parseFileName(response.headers.get("content-disposition"));
  return { stream: response.body ?? emptyStream(), contentType, fileName };
}

export async function readBinaryError(
  response: Response,
  method: HttpMethod,
  uri: string,
  signal: AbortSignal,
): Promise<BinaryErrorContent> {
  let buffer: ArrayBuffer;
  try {
    buffer = await response.arrayBuffer();
  } catch (err) {
    if (err instanceof CoreError || (signal.aborted && err === signal.reason)) throw err;
    throw new DecodeError(`${method} ${uri} failed: Response body could not be read.`, {
      cause: err,
      method,
      uri,
      status: response.status,
      headers: response.headers,
    });
  }
  return {
    bytes: new Uint8Array(buffer),
    contentType: response.headers.get("content-type") ?? undefined,
    fileName: parseFileName(response.headers.get("content-disposition")),
  };
}

export function resolveFile(
  input: FileInput,
  declaredContentType: string | undefined,
  signal?: AbortSignal,
): ResolvedFile {
  const file: FileData = isFileData(input) ? input : { data: input };
  if (!isBinaryData(file.data)) throw unusableBinaryData(file.data);
  const declared = file.contentType ?? blobContentType(file.data);
  const contentType = declared === undefined || declared === "" ? declaredContentType : declared;
  const fileName = file.fileName ?? blobFileName(file.data);
  const body = toBody(file.data, signal);
  if (body instanceof ReadableStream) return { body, contentType, fileName, streaming: true };
  return { body, contentType, fileName, streaming: false };
}

export function concatStream(
  sources: readonly ByteSource[],
  signal: AbortSignal | undefined,
): ReadableStream<Uint8Array> {
  return streamFrom(concatenate(sources), signal);
}

export function attachmentDisposition(fileName: string | undefined): string | undefined {
  if (fileName === undefined || fileName === "") return undefined;
  return `attachment; filename="${asciiFileName(fileName)}"; filename*=UTF-8''${encodeRfc5987(fileName)}`;
}

const EXTENDED_FILENAME = /;[ \t]*filename\*[ \t]*=[ \t]*([^;]*)/i;
const QUOTED_FILENAME = /;[ \t]*filename[ \t]*=[ \t]*"((?:[^"\\]|\\[\s\S])*)"/i;
const TOKEN_FILENAME = /;[ \t]*filename[ \t]*=[ \t]*([^;",]+)/i;
const ESCAPED_PAIR = /\\([\s\S])/g;

export function parseFileName(disposition: string | null): string | undefined {
  if (disposition === null) return undefined;

  const extended = EXTENDED_FILENAME.exec(disposition);
  if (extended !== null) {
    const decoded = decodeRfc5987((extended[1] ?? "").trim());
    if (decoded !== undefined && decoded !== "") return decoded;
  }

  const quoted = QUOTED_FILENAME.exec(disposition);
  if (quoted !== null) {
    const unescaped = (quoted[1] ?? "").replace(ESCAPED_PAIR, "$1");
    if (unescaped !== "") return unescaped;
  }

  const token = TOKEN_FILENAME.exec(disposition);
  const value = (token?.[1] ?? "").trim();
  return value === "" ? undefined : value;
}

function emptyStream(): ReadableStream<Uint8Array<ArrayBuffer>> {
  return new ReadableStream<Uint8Array<ArrayBuffer>>({ start: (controller) => controller.close() });
}

function toBody(data: BinaryData, signal: AbortSignal | undefined): ResolvedFile["body"] {
  if (data instanceof ArrayBuffer) return new Uint8Array(data);
  if (data instanceof ReadableStream) return signal === undefined ? data : borrowStream(data, signal);
  if (isAsyncIterable(data)) return streamFrom(data, signal);
  return data;
}

function streamFrom<T extends Uint8Array>(
  iterable: AsyncIterable<T>,
  signal: AbortSignal | undefined,
): ReadableStream<T> {
  const iterator = iterable[Symbol.asyncIterator]();
  let sink: ReadableStreamDefaultController<T> | undefined;
  let settled = false;

  const settle = (): boolean => {
    if (settled) return false;
    settled = true;
    return true;
  };

  const onAbort = (): void => {
    if (!settle()) return;
    sink?.error(signal?.reason);
    void iterator.return?.(signal?.reason).catch(() => {});
  };

  signal?.addEventListener("abort", onAbort, { once: true });

  return new ReadableStream<T>({
    start: (controller) => {
      sink = controller;
      if (signal?.aborted) onAbort();
    },
    pull: async (controller) => {
      const { done, value } = await iterator.next();
      if (settled) return;
      if (done) {
        settle();
        controller.close();
        return;
      }
      controller.enqueue(value);
    },
    cancel: async (reason) => {
      settle();
      await iterator.return?.(reason);
    },
  });
}

function borrowStream(source: ReadableStream<Uint8Array>, signal: AbortSignal): ReadableStream<Uint8Array> {
  let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
  let sink: ReadableStreamDefaultController<Uint8Array> | undefined;
  let settled = false;

  const settle = (): boolean => {
    if (settled) return false;
    settled = true;
    return true;
  };

  const onAbort = (): void => {
    if (!settle()) return;
    sink?.error(signal.reason);
    reader?.releaseLock();
  };

  signal.addEventListener("abort", onAbort, { once: true });

  return new ReadableStream<Uint8Array>(
    {
      start: (controller) => {
        sink = controller;
        if (signal.aborted) onAbort();
      },
      pull: async (controller) => {
        try {
          reader ??= source.getReader();
          const { done, value } = await reader.read();
          if (settled) return;
          if (done) {
            settle();
            controller.close();
            return;
          }
          controller.enqueue(value);
        } catch (err) {
          if (settle()) controller.error(err);
        }
      },
      cancel: () => {
        if (settle()) reader?.releaseLock();
      },
    },
    { highWaterMark: 0 },
  );
}

async function* concatenate(sources: readonly ByteSource[]): AsyncGenerator<Uint8Array> {
  for (const source of sources) {
    if (source instanceof Uint8Array) {
      yield source;
    } else if (source instanceof Blob) {
      const reader = source.stream().getReader();
      try {
        yield* readChunks(reader);
      } finally {
        await reader.cancel().catch(() => {});
      }
    } else {
      const reader = source.getReader();
      try {
        yield* readChunks(reader);
      } finally {
        reader.releaseLock();
      }
    }
  }
}

async function* readChunks(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<Uint8Array> {
  for (;;) {
    const { done, value } = await reader.read();
    if (done) return;
    yield value;
  }
}

function isFileData(input: FileInput): input is FileData {
  return typeof input === "object" && input !== null && "data" in input;
}

function isBinaryData(data: unknown): data is BinaryData {
  return (
    data instanceof Blob ||
    data instanceof Uint8Array ||
    data instanceof ArrayBuffer ||
    data instanceof ReadableStream ||
    isAsyncIterable(data)
  );
}

function isAsyncIterable(data: unknown): data is AsyncIterable<Uint8Array<ArrayBuffer>> {
  return typeof data === "object" && data !== null && Symbol.asyncIterator in data;
}

function unusableBinaryData(data: unknown): TypeError {
  return new TypeError(
    `A file body must be a Blob, Uint8Array, ArrayBuffer, ReadableStream or an async iterable of ` +
      `bytes, or a { data } wrapper around one — received ${receivedType(data)}. A filesystem path is ` +
      `not a file body: open it with createReadStream(path), or read it with await openAsBlob(path).`,
  );
}

function receivedType(data: unknown): string {
  if (data === null) return "null";
  if (typeof data !== "object") return typeof data;
  return data.constructor?.name ?? "object";
}

function blobContentType(data: BinaryData): string | undefined {
  return data instanceof Blob ? data.type : undefined;
}

function blobFileName(data: BinaryData): string | undefined {
  if (!(data instanceof Blob) || !("name" in data)) return undefined;
  const name = data.name;
  return typeof name === "string" && name !== "" ? name : undefined;
}

const DISPOSITION_UNSAFE = /[^ -~]|["\\;]/g;

function asciiFileName(fileName: string): string {
  return fileName.replace(DISPOSITION_UNSAFE, "_");
}

const RFC5987_ATTR_CHAR = /^[A-Za-z0-9!#$&+\-.^_`|~]$/;

function encodeRfc5987(value: string): string {
  let encoded = "";
  for (const byte of new TextEncoder().encode(value)) {
    const char = String.fromCharCode(byte);
    encoded += RFC5987_ATTR_CHAR.test(char) ? char : `%${byte.toString(16).toUpperCase().padStart(2, "0")}`;
  }
  return encoded;
}

const EXT_VALUE = /^([^']*)'[^']*'([\s\S]*)$/;

function decodeRfc5987(value: string): string | undefined {
  const parts = EXT_VALUE.exec(value);
  if (parts === null) return undefined;

  const charset = (parts[1] ?? "").toLowerCase();
  const label = charset === "" ? "utf-8" : charset;
  if (label !== "utf-8" && label !== "iso-8859-1") return undefined;

  const bytes = percentDecode(parts[2] ?? "");
  if (bytes === undefined) return undefined;

  try {
    return new TextDecoder(label, { fatal: true }).decode(bytes);
  } catch {
    return undefined;
  }
}

const HEX_PAIR = /^[0-9A-Fa-f]{2}$/;

function percentDecode(value: string): Uint8Array<ArrayBuffer> | undefined {
  const bytes: number[] = [];
  for (let index = 0; index < value.length; index += 1) {
    const char = value[index] ?? "";
    if (char !== "%") {
      const code = char.charCodeAt(0);
      if (code > 0xff) return undefined;
      bytes.push(code);
      continue;
    }
    const hex = value.slice(index + 1, index + 3);
    if (!HEX_PAIR.test(hex)) return undefined;
    bytes.push(Number.parseInt(hex, 16));
    index += 2;
  }
  return new Uint8Array(bytes);
}
