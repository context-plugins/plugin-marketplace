import * as s from "./validation/index.js";
import type { Schema } from "./validation/schema.js";
import { ConfigurationError } from "./errors.js";

const MAX_TIMEOUT_MS = 2_147_483_647;
const DEFAULT_EVENT_STREAM_OPTIONS: ResolvedEventStreamOptions = {
  idleTimeout: 60_000,
};

type AsyncDisposeKey = SymbolConstructor extends { readonly asyncDispose: infer K extends symbol }
  ? K
  : never;

type AsyncDisposeMember = { readonly [K in AsyncDisposeKey]: () => Promise<void> };

const AsyncDisposable = class {} as new () => AsyncDisposeMember;

/**
 * A server-sent event stream you own: the still-open response, read one event at a time.
 *
 * @remarks
 * The operation resolves as soon as the response headers arrive. Iterate the stream once with
 * `for await`, or release it unread with `close()`. Each step is one event's `data`, decoded
 * through the schema the operation declares, and nothing is read ahead of your loop. Leaving the
 * loop early releases the connection. Aborting the call's `signal` ends the loop with the signal's
 * own `reason`, and every other failure is a `CoreError`. Where the platform supports
 * `await using`, disposing the stream releases the connection too.
 */
export class EventStream<T> extends AsyncDisposable implements AsyncIterable<T> {
  readonly #close: () => Promise<void>;
  readonly #events: AsyncGenerator<T, undefined, undefined>;
  #taken = false;

  /** @internal Engine-only: the stream decoders in `response-decoder.ts` build it. */
  constructor(close: () => Promise<void>, events: AsyncGenerator<T, undefined, undefined>) {
    super();
    this.#close = close;
    this.#events = events;
  }

  /**
   * The events' data, in order. Callable once: a second call throws a `TypeError`, as a second read
   * of a web stream does.
   */
  [Symbol.asyncIterator](): AsyncIterator<T, undefined, undefined> {
    return this.#take();
  }

  /** Releases the connection, iterated or not. Safe to call more than once. */
  close(): Promise<void> {
    return this.#close();
  }

  /**
   * The same events as a web `ReadableStream`, pulled one at a time; cancelling it releases the
   * connection. It takes the stream's one iteration.
   */
  toReadableStream(): ReadableStream<T> {
    return pullStream(this.#take());
  }

  #take(): EventIterator<T> {
    if (this.#taken) {
      throw new TypeError("An event stream can be read once, and this one is already being read.");
    }
    this.#taken = true;
    const events = this.#events;
    return {
      next: () => events.next(),
      return: () => {
        void this.#close();
        return events.return(undefined);
      },
    };
  }
}

const asyncDispose: unknown = Reflect.get(Symbol, "asyncDispose");
if (typeof asyncDispose === "symbol") {
  Object.defineProperty(EventStream.prototype, asyncDispose, {
    value(this: EventStream<unknown>): Promise<void> {
      return this.close();
    },
  });
}

/**
 * How an event stream is watched for a silent server.
 *
 * @remarks
 * Resolved once, when the client is built. A field left out takes its default.
 */
export type EventStreamOptions = {
  /**
   * Milliseconds the server may stay silent while your loop waits for the next event. When it runs
   * out the loop ends with a `TimeoutError`. `null` disables it.
   *
   * @default 60000
   */
  readonly idleTimeout?: number | null;
};

export type ResolvedEventStreamOptions = Required<EventStreamOptions>;

export function buildEventStreamOptions(options: EventStreamOptions | undefined): ResolvedEventStreamOptions {
  const schema: Schema<ResolvedEventStreamOptions> = s.of(
    s.fallback(
      s.object<ResolvedEventStreamOptions>({
        idleTimeout: s.fallback(
          s.nullable(s.int().check(s.gte(0), s.lte(MAX_TIMEOUT_MS))),
          DEFAULT_EVENT_STREAM_OPTIONS.idleTimeout,
        ),
      }),
      DEFAULT_EVENT_STREAM_OPTIONS,
    ),
  );
  try {
    return schema.decode(options);
  } catch (err) {
    throw new ConfigurationError("The event stream options could not be resolved.", { cause: err });
  }
}

type EventIterator<T> = {
  next(): Promise<IteratorResult<T, undefined>>;
  return(): Promise<IteratorResult<T, undefined>>;
};

function pullStream<T>(iterator: EventIterator<T>): ReadableStream<T> {
  return new ReadableStream<T>(
    {
      pull: async (controller) => {
        const next = await iterator.next();
        if (next.done === true) controller.close();
        else controller.enqueue(next.value);
      },
      cancel: async () => {
        await iterator.return();
      },
    },
    { highWaterMark: 0 },
  );
}
