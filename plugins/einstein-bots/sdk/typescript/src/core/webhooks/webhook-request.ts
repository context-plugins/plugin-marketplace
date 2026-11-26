/**
 * The headers of an incoming webhook, as a fetch `Headers` or as the record a Node server hands
 * over (`IncomingHttpHeaders` fits). Names are matched without regard to case; a repeated header
 * is joined with `","`; an undefined value counts as absent.
 */
export type RequestHeaders = Headers | Readonly<Record<string, string | readonly string[] | undefined>>;

/**
 * The body of an incoming webhook still being streamed: a web `ReadableStream`, or any async
 * iterable of byte chunks, which a Node `Readable` such as `IncomingMessage` is.
 */
export type RequestBodyStream = ReadableStream<Uint8Array> | AsyncIterable<Uint8Array>;

/**
 * An incoming webhook, buffered once so that `verify` and `parse` read the same bytes.
 *
 * @remarks
 * Build one with {@link WebhookRequest.fromBytes} from a body a framework has already buffered,
 * with {@link WebhookRequest.fromStream} from a body still being streamed, such as a Node
 * `IncomingMessage`, or with {@link WebhookRequest.fromRequest} from a fetch `Request`, which
 * reads a clone so the caller's request stays readable. The body must be the bytes or the text
 * the sender sent, never a value a framework has parsed, because re-serialising it can change the
 * bytes that were signed.
 */
export class WebhookRequest {
  readonly body: Uint8Array;
  readonly #headers: ReadonlyMap<string, string>;

  private constructor(body: Uint8Array, headers: ReadonlyMap<string, string>) {
    this.body = body;
    this.#headers = headers;
  }

  /** The value of a header, matched without regard to case, or `undefined` when absent. */
  header(name: string): string | undefined {
    return this.#headers.get(name.toLowerCase());
  }

  /** Builds a request from a body a framework has already buffered. */
  static fromBytes(body: string | Uint8Array | ArrayBuffer, headers: RequestHeaders): WebhookRequest {
    return new WebhookRequest(toBytes(body), toHeaderMap(headers));
  }

  /**
   * Builds a request from a body still being streamed, reading it to the end. The stream is
   * consumed; read the bytes back from {@link WebhookRequest.body}.
   */
  static async fromStream(body: RequestBodyStream, headers: RequestHeaders): Promise<WebhookRequest> {
    const chunks: Uint8Array[] = [];
    for await (const chunk of body as AsyncIterable<Uint8Array>) chunks.push(chunk);
    const bytes = new Uint8Array(chunks.reduce((length, chunk) => length + chunk.byteLength, 0));
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    return WebhookRequest.fromBytes(bytes, headers);
  }

  /** Builds a request from a fetch `Request`, reading a clone so the caller's body stays unread. */
  static async fromRequest(request: Request): Promise<WebhookRequest> {
    const body = new Uint8Array(await request.clone().arrayBuffer());
    return new WebhookRequest(body, toHeaderMap(request.headers));
  }
}

function toBytes(body: string | Uint8Array | ArrayBuffer): Uint8Array {
  if (typeof body === "string") return new TextEncoder().encode(body);
  if (body instanceof Uint8Array) return body;
  return new Uint8Array(body);
}

function toHeaderMap(headers: RequestHeaders): ReadonlyMap<string, string> {
  const map = new Map<string, string>();
  const add = (name: string, value: string): void => {
    const key = name.toLowerCase();
    const existing = map.get(key);
    map.set(key, existing === undefined ? value : `${existing},${value}`);
  };
  if (headers instanceof Headers) {
    headers.forEach((value, name) => add(name, value));
    return map;
  }
  for (const [name, value] of Object.entries(headers)) {
    if (value === undefined) continue;
    if (typeof value === "string") add(name, value);
    else for (const item of value) add(name, item);
  }
  return map;
}
