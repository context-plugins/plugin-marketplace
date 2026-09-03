---
name: typescript-testing
description: Testing code that calls an APIMatic-generated TypeScript SDK — which seam to fake (`ClientOptions.fetch`, or an interceptor at the global-fetch layer), stubbing bodies in wire shape, asserting the request the SDK actually built, covering the error and decode-failure paths, and keeping tests independent of SDK internals. Load before writing tests for the integration layer.
---

# Testing code that uses an APIMatic TypeScript SDK

The client takes a `fetch` implementation on its options object, and that is the seam for testing: pass
a function that returns a `Response` and no real network calls happen. The SDK ships no mocking
helpers, no test doubles and no recorded fixtures — this is standard TypeScript. No interceptor
library, no `nock`, no `msw` required.

```ts
const client = new {Api}Client({ fetch: async () => jsonResponse(200, { id: "1" }) });
```

**Match the project's existing test stack — don't impose one.** Check the test dependencies and the
existing tests, then mirror both its **runner** (Vitest / Jest / `node:test`) and its **assertion
style**: if it uses `node:test` with `assert`, or an assertion library, write assertions that way
rather than switching. The samples below use a `describe`/`it`/`expect` style **purely for reference**
— they show the SDK testing seam and *what* to assert, not a mandated runner or matcher library.
Substitute your own `{Api}Client` and operation names as well.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `{Api}Client`, `{package-name}`, `{resource}`, `{Resource}`, `{Operation}`, `{scheme}`) — replace it
> with the concrete identifier from the source.

## A reusable fake fetch

`ClientOptions.fetch` is typed `typeof fetch`, so a fake needs no base class, no registration and no
mocking library — just a function:

```ts
type Call = { url: URL; init: RequestInit };

function stubFetch(responder: (url: URL, init: RequestInit) => Response | Promise<Response>) {
  // Every request, in order — the token fetch appends too, so this is what you count.
  const calls: Call[] = [];

  // Typed as `typeof fetch` so a signature drift is a compile error, not a runtime surprise.
  const fetch: typeof globalThis.fetch = async (input, init) => {
    const call = { url: new URL(String(input)), init: init ?? {} };
    calls.push(call);
    return responder(call.url, call.init);
  };

  return { fetch, calls, last: () => calls[calls.length - 1]! };
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), { status });
}

function emptyResponse(status = 204): Response {
  return new Response(null, { status });     // what an operation returning `undefined` expects
}

/** Answer requests in order — the shape most tests want. */
function queue(...responses: Response[]) {
  const pending = [...responses];
  return () => {
    const next = pending.shift();
    if (next === undefined) throw new Error("stub fetch ran out of queued responses");
    return next;
  };
}
```

Wire it in and you have a real client with no network:

```ts
function clientReturning(...responses: Response[]) {
  const stub = stubFetch(queue(...responses));
  const client = new {Api}Client({ fetch: stub.fetch, {scheme}: { /* ... */ } });
  return { client, stub };
}
```

`Response` is global on Node 18+. Credentials can be dummy values, or omitted entirely — nothing
validates them when the transport is stubbed, unless the test is *about* the credential.

**Do not mock the client, its resource classes, or reach for its internals.** `#rawClient` and the
other private fields are genuinely unreachable, and a hand-rolled double of `{Api}Client` cannot catch
the mistakes that actually happen — a wrong path parameter, a body that does not encode, a header you
forgot. Faking `fetch` exercises the real request-building pipeline; that is the whole point. Never
construct a resource class either: it is exported only for its merged namespace and for `instanceof`,
and its constructor takes engine internals that are not exported.

> **If your client has an OAuth 2 scheme, the first request your stub sees is the token request**, not
> your operation. See **Fake an OAuth token endpoint** below before writing the first test — a
> single-response fake fails there in a confusing way.

## Stub bodies are in WIRE shape, not model shape

Every response is decoded through the operation's schema, so a stub body must be what the API would
actually put on the wire:

- **wire key spellings**, not the camelCase members — `created_at`, not `createdAt` (the `_keysMap` in
  `src/models/{model}.ts` gives the mapping);
- **wire date formats** — an offset-bearing ISO string, an HTTP-date, or epoch **seconds**, per the
  field's schema combinator;
- **every required field present.**

Get a required one wrong and the call rejects with `SchemaError` before your assertion runs — which
reads as a mysterious failure until you read the message, which names the failing path and the
expected type exactly. Get an **optional** one wrong and nothing fails at all: model schemas are
**loose**, so an unrecognized key is preserved rather than rejected, the member reads back `undefined`,
and the test passes for the wrong reason. Two shortcuts close that gap:

```ts
const wireBody = {model}Schema.encode(someModel);            // round-trip a model to a valid wire body
expect(() => {model}Schema.decode(fixture)).not.toThrow();   // validate a hand-written fixture once
```

Prefer the first: build the fixture as a typed model and encode it, so a member rename breaks the
fixture instead of passing a stale test. Validate any fixture you hand-write and reuse — it catches
fixture rot when the SDK is regenerated. Both schema consts are exported from the package root.

## Test a success path

```ts
it("returns the decoded model", async () => {
  const { client } = clientReturning(jsonResponse(200, { id: "1", created_at: "2024-06-17T15:30:00Z" }));

  const result = await client.{resource}.{operation}({ /* ... */ });

  expect(result.id).toBe("1");
  expect(result.createdAt).toEqual(new Date("2024-06-17T15:30:00Z"));   // Date, decoded for you
});
```

An operation whose success type is `undefined` needs a genuinely **empty** body — `emptyResponse()`.
A non-empty one raises `SchemaError` even on a `204`.

## Test an error path

A non-2xx status rejects with the operation's error class, and the reason lives in `err.payload` — a
discriminated union keyed by the declared response **schema**, not by the status
(**typescript-error-handling**). Which class and which arms an operation has is the **Error arms**
bullet in `map/operations/{resource}.md`, so assert the pair that matches your operation.

**Case A — the operation declares error bodies**, so it has a generated `{Resource}.{Operation}Error`:

```ts
import { {Resource} } from "{package-name}";

it("surfaces the declared 400 arm", async () => {
  const { client } = clientReturning(jsonResponse(400, { message: "bad input", code: "invalid" }));

  try {
    await client.{resource}.{operation}({ /* ... */ });
    throw new Error("expected a rejection");
  } catch (err) {
    expect(err).toBeInstanceOf({Resource}.{Operation}Error);
    const e = err as {Resource}.{Operation}Error;
    expect(e.status).toBe(400);                            // always present, whichever arm you got
    expect(e.payload.kind).toBe("{arm}");                  // narrow before reading the body
    if (e.payload.kind === "{arm}") expect(e.payload.body.message).toBe("bad input");
  }
});
```

The error body is decoded through **its** schema, so it is wire-shaped on the same terms as a success
body.

**Case B — the operation declares no error bodies.** It rejects with the base `ResponseError`, whose
payload is always the `"undeclared"` arm — **raw bytes**, not a decoded body:

```ts
import { ResponseError } from "{package-name}";

const e = err as ResponseError;
expect(e.status).toBe(422);
expect(e.payload.kind).toBe("undeclared");
expect(new TextDecoder().decode(e.payload.rawBody)).toContain("bad input");
```

**Take the arm union from the contract sheet per operation.** `"undeclared"` is reachable in Case A
too — any status the operation's matchers do not cover falls to it — so an error test copied from a
sibling operation can pass for the wrong reason, landing in the `"undeclared"` branch and asserting
nothing about the typed body you meant to check.

Use `try`/`catch` rather than a rejection matcher: matcher support for narrowing a rejected value
differs between runners, and the `catch` form reads the same everywhere.

## Test the result-style (`asApiResult`) variant

`.asApiResult()` turns the error-status branch into a value, so there is nothing to catch — stub the
response and assert on the returned `ApiResult` directly. The split is mechanical: **2xx is
`ok: true`, every other status is `ok: false`**, and both carry `status` and `headers`.

```ts
it("reports the failure without throwing", async () => {
  const { client } = clientReturning(jsonResponse(400, { message: "bad input" }));

  const outcome = await client.{resource}.{operation}({ /* ... */ }).asApiResult();

  expect(outcome.ok).toBe(false);
  if (!outcome.ok) {
    expect(outcome.status).toBe(400);
    expect(outcome.error.kind).toBe("{arm}");   // outcome.error is the PAYLOAD, not the error object
  }
});
```

On success the value is `outcome.value` (not `.data`), and `outcome.headers` is the only way to read
**response headers** — so this is also the mode to test in when your code depends on a header on the
*success* path. `.asApiResult()` does **not** make the call non-throwing: everything in the next
section still rejects, and it must be called on the value the operation returned, before any
`.then()`.

## Assert the outgoing request

`expect(stub.calls).toHaveLength(1)` proves only that something was sent. Assert the things a
regression would actually change:

```ts
it("sends the right request", async () => {
  const { client, stub } = clientReturning(jsonResponse(200, { id: "1" }));

  await client.{resource}.{operation}({ {pathField}: "abc", {queryField}: 2, body: { name: "x" } });

  const { url, init } = stub.last();
  expect(init.method).toBe("POST");
  expect(url.pathname).toBe("/{expected}/{route}/abc");                    // path field substituted
  expect(url.searchParams.get("{wire-query-name}")).toBe("2");             // query lives on the URL
  expect(new Headers(init.headers).get("content-type")).toBe("application/json");
  expect(JSON.parse(String(init.body))).toEqual({ name: "x" });            // wire keys, wire dates
});
```

- **`input` is a `URL`**, so `new URL(String(input))` is safe and gives you `pathname` and
  `searchParams` for free rather than substring-matching a URL string.
- **Header names are lowercased.** The SDK passes a `Headers` instance and normalizes every layer —
  the endpoint's, the auth scheme's and the client's defaults — before merging, which is what makes the
  merge case-insensitive. Read them through `new Headers(init.headers)`; a plain `init.headers["Authorization"]`
  is both the wrong type and the wrong case.
- **The body is already serialized by the time the fake sees it.** `init.body` is a **string** (or
  `null`) for every body kind — JSON, form-urlencoded and text — and it uses **wire aliases**, because
  that is what encoding produces. Assert on the parsed string; do not "fix" the aliases in the test.
  The SDK never uses `FormData` or a stream.
- **A list-valued query or form parameter has a per-parameter wire style.** The `StyledParam` the
  generator emitted for it in `src/resources/{resource}.ts` carries a `style`: `plain` (the default —
  `name=a&name=b`), `indexed` (`name[0]=a`, percent-encoded in the raw URL as `name%5B0%5D=a`),
  `unindexed` (`name[]=a`), or `csv` / `tsv` / `psv` (one joined value). Read it before asserting:

  ```ts
  expect(url.searchParams.getAll("{name}")).toEqual(["a", "b"]);   // plain — get() returns only the FIRST
  expect(url.searchParams.get("{name}[0]")).toBe("a");             // indexed
  expect(url.searchParams.getAll("{name}[]")).toEqual(["a", "b"]); // unindexed
  expect(url.searchParams.get("{name}")).toBe("a,b");              // csv
  ```

  Object-valued parameters flatten to `key[sub]=value`. Path and header arrays are not configurable —
  both fold to one comma-separated value.
- The expected verb and route are the operation's **Wire** bullet in `map/operations/{resource}.md`,
  and the channel each field travels on is its **Fields** table. Take them from there — a field's
  channel is not derivable from its name.

Worth asserting once, somewhere, because they are silent when wrong:

- **The value actually reached the wire.** Request models encode loosely too, so an extra or misspelled
  optional member is carried into the body rather than rejected. Only an assertion on `init.body`
  catches it.
- **A body that cannot encode never reaches your fake.** Encoding happens *before* the request is
  dispatched, so the call rejects with `SchemaError` and `stub.calls` stays **empty**. Same for an
  optional path parameter left `undefined` whose placeholder cannot be filled — that rejects with
  `SdkError`, also before anything is sent. Assert `stub.calls` is empty in those tests.
- **`timeout` never rides the request.** It is a client-level option in **milliseconds** with no
  per-request override, and it reaches the wire only as `init.signal`. A test asserting the client's
  timeout on a captured request is asserting something that was never there.

## Cover the failures that are not a `ResponseError`

Failures where no usable response was produced reject with a member of the `{Api}Error` set — the
SDK-branded alias of the abstract base — and **never** match a `ResponseError` check
(**typescript-error-handling**). Each `kind` is reachable from the fake, which makes these paths
genuinely testable rather than hypothetical:

| To produce | Make the fake `fetch` / the client |
| --- | --- |
| `kind: "connection"` | throw any error |
| `kind: "timeout"` | hang until aborted, with a tiny `timeout` on the client |
| `kind: "abort"` | hang until aborted, and abort the signal you passed in `RequestOptions` |
| `kind: "schema"` | return a body that violates the schema (wrong type, bad date, non-empty `204`) |
| `kind: "auth"` | answer the **token** request with an error status (see below) |
| `kind: "sdk"` | omit an optional path parameter, leaving its placeholder unfilled |

```ts
import { {Api}Error } from "{package-name}";

it("maps a transport failure", async () => {
  const client = new {Api}Client({ fetch: async () => { throw new Error("ECONNREFUSED"); } });

  try {
    await client.{resource}.{operation}({ /* ... */ });
    throw new Error("expected a rejection");
  } catch (err) {
    expect(err).toBeInstanceOf({Api}Error);
    expect((err as {Api}Error).kind).toBe("connection");
  }
});
```

⚠ **A timeout or abort test needs a fake that honours `init.signal`.** The SDK aborts its own
controller and relies on `fetch` to reject with the abort reason; a fake that returns a
never-resolving promise and ignores the signal simply hangs the test until the runner kills it.

```ts
const hangingFetch: typeof globalThis.fetch = (_input, init) =>
  new Promise((_resolve, reject) => {
    init?.signal?.addEventListener("abort", () => reject(init.signal!.reason), { once: true });
  });

it("times out", async () => {
  const client = new {Api}Client({ timeout: 10, fetch: hangingFetch });

  await expect(client.{resource}.{operation}({ /* ... */ }))
    .rejects.toMatchObject({ kind: "timeout" });
});
```

That is faster and more deterministic than fake timers, and it exercises the real abort path. For
`"abort"`, keep the default timeout and abort your own `AbortController` passed in `RequestOptions`.

**A decode failure bypasses *both* response modes.** A 2xx body that does not satisfy the schema
raises `SchemaError`; `.asApiResult()` does **not** turn it into an `ok: false` result. Test that your
boundary maps it:

```ts
it("does not report an unreadable success body as a failure", async () => {
  // A real decode failure needs a TYPE mismatch, not an absent optional member.
  const { client } = clientReturning(jsonResponse(200, { id: 42 }));      // schema says string
  await expect(service.{operation}()).rejects.toBeInstanceOf(MyProviderUnreadable);
});
```

**A truncated 2xx that decodes cleanly** is the mirror image. A member declared optional is absent
without complaint and reads back `undefined`, so only your own guard catches it — test the guard:

```ts
it("does not report a truncated success body as a success", async () => {
  const { client } = clientReturning(jsonResponse(200, {}));              // no {wire_field}
  await expect(service.{operation}()).rejects.toBeInstanceOf(MyProviderUnreadable);
});
```

And the one people forget: **bad credentials**. A failed token fetch raises `AuthError` — `kind:
"auth"`, *not* a `ResponseError` — carrying the token endpoint's `ResponseError` on `.cause`. Return an
RFC 6749 error body from the **token** request and assert your configuration error, not a rejection
error:

```ts
it("treats bad credentials as a config error", async () => {
  const { client } = clientReturning(jsonResponse(401, { error: "invalid_client" }));  // no tokenResponse()
  await expect(service.{operation}()).rejects.toBeInstanceOf(MyProviderConfigError);
});
```

Being *refused* by the API is the disjoint case: that is a `ResponseError` with status 401/403 from the
operation itself.

## Fake an OAuth token endpoint

An OAuth 2 client fetches its token **lazily, on the first authenticated call, through the same
`fetch`** — so the *first* request your stub sees is the `POST` to the token endpoint, not your
operation. Two ways to handle it.

Queue a token response ahead of the operation's, and index from the end:

```ts
function tokenResponse(): Response {
  return jsonResponse(200, { access_token: "T", token_type: "Bearer", expires_in: 3600 });
}

const { client, stub } = clientReturning(tokenResponse(), jsonResponse(201, { id: "1" }));
await client.{resource}.{operation}({ /* ... */ });

expect(stub.calls).toHaveLength(2);
const { init } = stub.last();                                   // index from the end, not calls[0]
expect(new Headers(init.headers).get("authorization")).toBe("Bearer T");
```

Or route on the path, when the order is what you are testing:

```ts
const stub = stubFetch((url) =>
  url.pathname.endsWith("/{token-path}") ? tokenResponse() : jsonResponse(200, { id: "1" }),
);
```

Or bypass acquisition entirely with a stub token strategy — the generator's supported injection point
(**typescript-authentication**) — so the fake only ever sees your operation:

```ts
const client = new {Api}Client({
  {scheme}: { clientId: "id", clientSecret: "secret" },   // still required — the scheme is off without it
  {scheme}Strategy: { getToken: async () => ({ accessToken: "T", tokenType: "Bearer" }) },
  fetch: stub.fetch,
});
```

Facts that make these tests behave:

- **Forgetting the token request is the most common way a first test fails confusingly.** A
  single-response fake hands your operation's body to the *token* decoder, and you get a `SchemaError`
  about a missing `access_token` rather than anything mentioning auth.
- The token **response** is wire-shaped (`access_token`, `token_type`, `expires_in`); the token
  **request** is a `POST` with a form-urlencoded string body, and by default the client id and secret
  ride in a Basic `Authorization` header rather than in that body.
- The token endpoint may live on a **different server group**, so match on the path, not the host —
  read the group's URL from `DEFAULT_SERVER_OPTIONS` in `src/servers.ts`.
- The token is **cached on the scheme**, so only the first call fetches one: a test making two calls
  against one client sees three requests, not four. Build a fresh client per test to reset it. A
  missing or non-positive `expires_in` means the cached token never expires.
- The client `timeout` bounds the token request **and** the operation together, so a tiny timeout in an
  OAuth test can fire on the token leg.

## The alternative: intercepting global `fetch`

When your production code constructs the client itself and you cannot inject a `fetch`, intercept one
layer down instead — undici's `MockAgent` with `setGlobalDispatcher`, or `msw`. Your production code
runs unmodified:

```ts
import { MockAgent, setGlobalDispatcher } from "undici";

const agent = new MockAgent();
setGlobalDispatcher(agent);
agent.get("{base-origin}").intercept({ path: "{operation-path}", method: "POST" })
  .reply(201, { id: "1" }, { headers: { "content-type": "application/json" } });
```

Pick one and be consistent. An interceptor asserts on real URLs and is closer to the wire; the fake
`fetch` is dependency-free, faster, and does not care what HTTP stack is underneath. Two constraints:
an interceptor works **only while no `fetch` option is supplied** — a custom `fetch` bypasses it
entirely — and the client resolves `globalThis.fetch` **in its constructor**, so patching the global
after the client is built has no effect.

## Keeping tests independent of SDK internals

- **Never deep-import.** The package's `exports` map exposes `.` and `./package.json` and nothing else,
  so `{package-name}/models/…` does not resolve at all. Everything you need — the client, the options,
  every model type and its `{model}Schema`, the error classes, `ServerEnvironment` — is re-exported
  from the package root. Reading a file under `src/` is for *learning* the shape, never for importing.
- **Never assert on an error's `message`.** A `ResponseError`'s is only the status and status text
  (with `"HTTP error"` standing in for the empty `statusText` a hand-built `Response` gives you). It is
  not a contract. Assert `err.status` and the narrowed `err.payload`.
- **Never derive test data from the schema's own definition** — reading `_keysMap` to generate a
  payload means the fixture cannot detect a wrong payload. Construct models explicitly and
  `{model}Schema.encode` them.
- **Test your own boundary's output, not the SDK's.** The valuable assertions are that a provider 4xx
  becomes your 4xx and a transport failure becomes your 5xx. That the SDK rejects with
  `{Operation}Error` on a 400 is the SDK's own tested behaviour, not yours.
- Prefer this `fetch`-seam approach over wrapping the SDK in your own interface unless you need to
  abstract the SDK for other reasons.

## Integration tests

Against a **local test server**, leave `fetch` alone and redirect the base URL:

```ts
const client = new {Api}Client({
  serverEnvironment: ServerEnvironment.{Environment},
  serverOptions: { default: { {environment}: { baseUrl: server.url } } },
});
```

**Override every group the test touches.** Redirecting `default` does not move a token endpoint that
lives on its own group — it will reach for the real host and the test will either fail slowly or,
worse, succeed against production. `src/servers.ts` lists the groups and their environments.

Against a **live sandbox**, keep those tests separate from unit tests, skip them when credentials are
absent, and never assert on ids or timestamps the provider generates:

```ts
const hasCredentials = Boolean(process.env.{API}_CLIENT_ID);

describe.skipIf(!hasCredentials)("integration", () => {
  it("{operation}", async () => {
    const client = new {Api}Client({
      serverEnvironment: ServerEnvironment.{SandboxEnvironment},   // state it, never rely on the default
      {scheme}: { /* from env */ },
      timeout: 15_000,
    });
    const result = await client.{resource}.{operation}({ /* ... */ });
    expect(result.{member}).toBeDefined();
  });
});
```

Expect flakiness from the provider, not from your code, and never gate CI on a third party's uptime
unless you mean to.

## Notes

- **The response's `content-type` is never read.** The decoder is fixed by the operation, so a stubbed
  `Response` needs no `content-type` header; setting one is harmless documentation. What matters is
  that the body parses and satisfies the schema.
- **Matcher precedence:** an exact-status arm wins over a range or `"5XX"` wildcard arm. A test that
  stubs a status covered by both is asserting the exact one.
- **A `401` invalidates the cached OAuth token but does not retry the request.** A test that stubs a
  `401` sees one failed operation — and the *next* call in the same test re-fetches a token, so queue
  another `tokenResponse()` for it.
- **The SDK performs no retries and logs nothing**, so a stubbed `429`/`503` is seen exactly once and
  your queue needs exactly one response for it. If your code adds its own retrying `fetch` (see
  **typescript-configuration-resilience**), that is *your* code under test — test the wrapper
  **directly**, since it is a plain function taking a `fetch` and returning one:
  ```ts
  const statuses = [503, 200];
  const inner: typeof globalThis.fetch = async () => jsonResponse(statuses.shift()!, { id: "1" });
  const client = new {Api}Client({ fetch: retryingFetch(3, inner) });

  await client.{resource}.{operation}({ /* ... */ });
  expect(statuses).toHaveLength(0);      // both responses consumed
  ```
  Cover the case that is easiest to get wrong: an aborted request must not keep retrying.
- **A test environment with no global `fetch` fails in the constructor**, not on the first call — the
  client throws `SdkError` when it can resolve no implementation. Passing a fake avoids this entirely.
- **`instanceof` is dialect-scoped.** If the test setup loads the SDK through `require` and the code
  under test through `import` (or vice versa), `instanceof` is `false` across that boundary. Narrow on
  `err.kind` / `err.payload.kind` there, or fix the config to use one dialect.
- **Never guess a base URL.** With a fake `fetch` nothing is dialled and the host is irrelevant; if you
  match on URLs, take the prefix from `DEFAULT_SERVER_OPTIONS` rather than from memory — environments
  differ per API, and some SDKs ship a sandbox environment that already points at localhost.
- Mocking libraries work too — the seam is a plain function, so a `vi.fn()` / `jest.fn()` returning a
  `Response` satisfies it. The hand-written stub above gives you typed captured requests and ordered
  responses for free.
- **Keep one client across the calls of a test** as in production, so the token cache and the memoized
  resource getters behave the same shape they will at runtime
  (**typescript-client-initialization**).
- To look up an operation's signature, its field channels, route or error arms, take them from the
  contract sheet — `map/operations/{resource}.md` inside `node_modules/{package-name}/`, which carries
  all four — not the compiled `dist/`, and not memory.
