import type { Entry } from "./validation/schema.js";
import type { HttpMethod, RawClientOptions } from "./api-request.js";
import type { BinaryContent, BinaryErrorContent } from "./binary.js";
import { readBinary, readBinaryError } from "./binary.js";
import type { ResolvedEventStreamOptions } from "./event-stream.js";
import { EventStream } from "./event-stream.js";
import { EventStreamReader } from "./event-stream-reader.js";
import { CoreError, DecodeError } from "./errors.js";
import { SchemaError, decodeEntry } from "./validation/schema-error.js";
import type { ApiError, ApiErrorInit, Declared, Undeclared } from "./api-error.js";

export type JsonResponseDecoder<T> = {
  readonly kind: "json";
  readonly schema: Entry<T>;
};

export type TextResponseDecoder<T> = {
  readonly kind: "text";
  readonly schema: Entry<T>;
};

export type EmptyResponseDecoder = {
  readonly kind: "empty";
};

export type BinaryResponseDecoder = {
  readonly kind: "binary";
  readonly contentType: string;
};

export type BinaryErrorResponseDecoder = {
  readonly kind: "binaryError";
};

export type EventStreamTextResponseDecoder<T> = {
  readonly kind: "eventStreamText";
  readonly dataSchema: Entry<T>;
  readonly sentinel?: string | undefined;
};

export type EventStreamJsonResponseDecoder<T> = {
  readonly kind: "eventStreamJson";
  readonly dataSchema: Entry<T>;
  readonly sentinel?: string | undefined;
};

export type EventStreamResponseDecoder<T> =
  | EventStreamTextResponseDecoder<T>
  | EventStreamJsonResponseDecoder<T>;

export type ResponseDecoder<T> =
  | JsonResponseDecoder<T>
  | TextResponseDecoder<T>
  | ([T] extends [undefined] ? EmptyResponseDecoder : never)
  | ([T] extends [BinaryContent] ? BinaryResponseDecoder : never)
  | ([T] extends [EventStream<infer D>] ? EventStreamResponseDecoder<D> : never);

export type ErrorResponseDecoder<T> =
  | JsonResponseDecoder<T>
  | TextResponseDecoder<T>
  | ([T] extends [undefined] ? EmptyResponseDecoder : never)
  | ([T] extends [BinaryErrorContent] ? BinaryErrorResponseDecoder : never);

export type StatusPattern =
  | number
  | "1XX"
  | "2XX"
  | "3XX"
  | "4XX"
  | "5XX"
  | "default"
  | readonly [number, number];

/**
 * The payload union an operation's error class declares.
 *
 * @remarks
 * It is the type of `err.payload` on the thrown error and of `result.payload` on the
 * `ok: false` arm of `ApiResult`, so a narrowing written for one works unchanged for the other.
 */
export type PayloadOf<E extends ApiError> = E["payload"];

type BodyByKind<Payload> = {
  [Arm in Extract<Payload, Declared<string, unknown>> as Arm["kind"]]: Arm["body"];
};

type KindOf<Payload> = keyof BodyByKind<Payload> & string;

export type ErrorMatcher<Payload, K extends KindOf<Payload> = KindOf<Payload>> = {
  readonly on: StatusPattern;
  readonly kind: K;
  readonly decode: ErrorResponseDecoder<BodyByKind<Payload>[K]>;
};

type ErrorMatcherOf<Payload> = { [K in KindOf<Payload>]: ErrorMatcher<Payload, K> }[KindOf<Payload>];

type DeclaredArmOf<Payload> = {
  [K in KindOf<Payload>]: Declared<K, BodyByKind<Payload>[K]>;
}[KindOf<Payload>];

export type ErrorDecoders<E extends ApiError> = readonly ErrorMatcherOf<PayloadOf<E>>[];

export type ErrorFactory<E extends ApiError> = (new (init: ApiErrorInit<PayloadOf<E>>) => E) & {
  readonly errors?: ErrorDecoders<E> | undefined;
};

export type ResponseHandler<T = unknown, E extends ApiError = ApiError> = {
  success: ResponseDecoder<T>;
  errorFactory: ErrorFactory<E>;
};

type ReaderOptions = Pick<RawClientOptions, "eventStream">;

export class ResponseReader {
  readonly #eventStreamOptions: ResolvedEventStreamOptions;

  constructor(options: ReaderOptions) {
    this.#eventStreamOptions = options.eventStream;
  }

  async read<T>(
    decoder: ResponseDecoder<T> | ErrorResponseDecoder<T>,
    response: Response,
    method: HttpMethod,
    uri: string,
    signal: AbortSignal,
    abort: () => void,
  ): Promise<T> {
    switch (decoder.kind) {
      case "json":
        return decodeJson(decoder, response, method, uri, signal);
      case "text":
        return decodeText(decoder, response, method, uri, signal);
      case "empty":
        return (await decodeEmpty(response, method, uri, signal)) as T;
      case "binary":
        return readBinary(decoder, response) as T;
      case "binaryError":
        return (await readBinaryError(response, method, uri, signal)) as T;
      case "eventStreamText":
        return readEventStreamText(
          decoder,
          response,
          method,
          uri,
          signal,
          this.#eventStreamOptions,
          abort,
        ) as T;
      case "eventStreamJson":
        return readEventStreamJson(
          decoder,
          response,
          method,
          uri,
          signal,
          this.#eventStreamOptions,
          abort,
        ) as T;
      default: {
        await response.body?.cancel().catch(() => {});
        return unknownDecoderKind(decoder);
      }
    }
  }

  async readError<E extends ApiError>(
    factory: ErrorFactory<E>,
    response: Response,
    method: HttpMethod,
    uri: string,
    signal: AbortSignal,
    abort: () => void,
  ): Promise<E> {
    const matchers = factory.errors;
    const status = response.status;
    const matcher =
      matchers?.find((m) => m.on === status) ??
      matchers?.find((m) => typeof m.on !== "number" && m.on !== "default" && matchesStatus(m.on, status)) ??
      matchers?.find((m) => m.on === "default");
    const payload: DeclaredArmOf<PayloadOf<E>> | Undeclared = matcher
      ? await this.#declared(matcher, response, method, uri, signal, abort)
      : { kind: "undeclared", rawBody: await readRawBody(response, method, uri, signal) };
    return new factory({ status, headers: response.headers, method, uri, payload });
  }

  async #declared<Payload, K extends KindOf<Payload>>(
    matcher: ErrorMatcher<Payload, K>,
    response: Response,
    method: HttpMethod,
    uri: string,
    signal: AbortSignal,
    abort: () => void,
  ): Promise<Declared<K, BodyByKind<Payload>[K]>> {
    return {
      kind: matcher.kind,
      body: await this.read(matcher.decode, response, method, uri, signal, abort),
    };
  }
}

async function decodeJson<T>(
  decoder: JsonResponseDecoder<T>,
  response: Response,
  method: HttpMethod,
  uri: string,
  signal: AbortSignal,
): Promise<T> {
  let text: string;
  try {
    text = await response.text();
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
  return decodeJsonText(decoder.schema, text, "Response body", response, method, uri);
}

async function decodeText<T>(
  decoder: TextResponseDecoder<T>,
  response: Response,
  method: HttpMethod,
  uri: string,
  signal: AbortSignal,
): Promise<T> {
  let text: string;
  try {
    text = await response.text();
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
  return decodeTextValue(decoder.schema, text, "Response body", response, method, uri);
}

function decodeJsonText<T>(
  schema: Entry<T>,
  text: string,
  subject: string,
  response: Response,
  method: HttpMethod,
  uri: string,
): T {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    throw new DecodeError(`${method} ${uri} failed: ${subject} could not be parsed as JSON.`, {
      cause: err,
      method,
      uri,
      status: response.status,
      headers: response.headers,
    });
  }
  try {
    return decodeEntry(schema, parsed);
  } catch (err) {
    if (!(err instanceof SchemaError)) throw err;
    throw new DecodeError(`${method} ${uri} failed: ${subject} could not be decoded.`, {
      cause: err,
      method,
      uri,
      status: response.status,
      headers: response.headers,
    });
  }
}

function decodeTextValue<T>(
  schema: Entry<T>,
  text: string,
  subject: string,
  response: Response,
  method: HttpMethod,
  uri: string,
): T {
  try {
    return decodeEntry(schema, text);
  } catch (err) {
    if (!(err instanceof SchemaError)) throw err;
    throw new DecodeError(`${method} ${uri} failed: ${subject} could not be decoded.`, {
      cause: err,
      method,
      uri,
      status: response.status,
      headers: response.headers,
    });
  }
}

async function decodeEmpty(
  response: Response,
  method: HttpMethod,
  uri: string,
  signal: AbortSignal,
): Promise<undefined> {
  let bytes: ArrayBuffer;
  try {
    bytes = await response.arrayBuffer();
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
  if (bytes.byteLength > 0)
    throw new DecodeError(`${method} ${uri} failed: Expected an empty response body.`, {
      method,
      uri,
      status: response.status,
      headers: response.headers,
    });
  return undefined;
}

async function readRawBody(
  response: Response,
  method: HttpMethod,
  uri: string,
  signal: AbortSignal,
): Promise<ArrayBuffer> {
  try {
    return await response.arrayBuffer();
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
}

export function readEventStreamJson<T>(
  decoder: EventStreamJsonResponseDecoder<T>,
  response: Response,
  method: HttpMethod,
  uri: string,
  signal: AbortSignal,
  options: ResolvedEventStreamOptions,
  abort: () => void,
): EventStream<T> {
  const reader = new EventStreamReader(response, method, uri, signal, options, abort, decoder.sentinel);
  const events = (async function* (): AsyncGenerator<T, undefined, undefined> {
    for await (const data of reader.frames()) {
      yield decodeJsonText(decoder.dataSchema, data, "Event data", response, method, uri);
    }
    return undefined;
  })();

  return new EventStream(reader.close, events);
}

export function readEventStreamText<T>(
  decoder: EventStreamTextResponseDecoder<T>,
  response: Response,
  method: HttpMethod,
  uri: string,
  signal: AbortSignal,
  options: ResolvedEventStreamOptions,
  abort: () => void,
): EventStream<T> {
  const reader = new EventStreamReader(response, method, uri, signal, options, abort, decoder.sentinel);
  const events = (async function* (): AsyncGenerator<T, undefined, undefined> {
    for await (const data of reader.frames()) {
      yield decodeTextValue(decoder.dataSchema, data, "Event data", response, method, uri);
    }
    return undefined;
  })();

  return new EventStream(reader.close, events);
}

function matchesStatus(pattern: StatusPattern, status: number): boolean {
  if (typeof pattern === "number") return pattern === status;
  if (typeof pattern === "string") return `${Math.floor(status / 100)}XX` === pattern;
  return status >= pattern[0] && status <= pattern[1];
}

function unknownDecoderKind(decoder: never): never {
  const kind = (decoder as { kind?: unknown }).kind;
  throw new TypeError(`Unsupported response decoder kind: ${String(kind)}`);
}
