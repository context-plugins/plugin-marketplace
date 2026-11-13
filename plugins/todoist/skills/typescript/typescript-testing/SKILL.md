---
name: typescript-testing
description: Load before writing tests for code that calls an APIMatic-generated TypeScript SDK — faking `ClientOptions.fetch` or intercepting global `fetch`, wire-shaped stub bodies, asserting the request the SDK built, error, decode and auth failure paths, OAuth token stubs, paged walks, and the on-by-default retries.
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
type Call = { url: URL; request: Request; body: string | undefined };

function stubFetch(responder: (url: URL, request: Request) => Response | Promise<Response>) {
  // Every request, in order — the token fetch appends too, so this is what you count.
  const calls: Call[] = [];

  // Typed as `typeof fetch` so a signature drift is a compile error, not a runtime surprise. The SDK
  // calls it with one `Request` and no `init`; wrapping both in a `Request` also accepts a direct call.
  const fetch: typeof globalThis.fetch = async (input, init) => {
    const request = new Request(input, init);
    const body = request.body === null ? undefined : await request.clone().text();
    const call = { url: new URL(request.url), request, body };
    calls.push(call);
    return responder(call.url, request);
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
  const client = new {Api}Client({
    fetch: stub.fetch,
    retry: { maxRetries: 0 },          // one request per call — see *Notes*
    {scheme}: { /* ... */ },
  });
  return { client, stub };
}
```

**`retry: { maxRetries: 0 }` is load-bearing.** Retries are on by default, so without it a stubbed
`503` on a `GET` is fetched four times across about 7 s of backoff, and a queue holding one response
runs out on the second attempt. Leave it on every test client that is not *about* retrying.

**Logging is off unless the environment turns it on.** A test client with no `logging` reads
`{APICLIENTTYPENAME}_LOG` (the client class name in upper snake case, plus `_LOG`) like any other, so a CI job
that exports it fills the test output with request lines. Set `logging: { level: "off" }` where that
matters, or pass a `logger` that records its calls when the test is *about* what gets logged.

`Response` is global on Node 18+. Credentials can be dummy values, or omitted entirely — nothing
validates them when the transport is stubbed, unless the test is *about* the credential.

**Fake `fetch`, not the client.** A hand-rolled double of `{Api}Client` or a resource class (which you
cannot construct — **typescript-calling-endpoints**) cannot catch the mistakes that actually happen — a
wrong path parameter, a body that does not encode, a header you forgot; a fake `fetch` runs the real
request pipeline.

> **With an OAuth 2 scheme, the first request your stub sees is the token request**, not your
> operation. A single-response fake hands your operation's body to the token decoder, and the call
> fails with an `AuthError` (cause: a `DecodeError` about `access_token`) that reads like bad
> credentials. See **Fake an OAuth token endpoint** below.

## Stub bodies are in WIRE shape, not model shape

Every response is decoded through the operation's schema, so a stub body must be what the API would
actually put on the wire:

- **wire key spellings**, not the camelCase members — `created_at`, not `createdAt` (the `_keysMap` in
  `src/models/{model}.ts` gives the mapping);
- **wire date formats** — an offset-bearing ISO string, an HTTP-date, or epoch **seconds**, per the
  field's schema combinator;
- **every required field present.**

Get a required one wrong and the call rejects with `DecodeError` before your assertion runs — which
reads as a mysterious failure until you read its `cause`, a `SchemaError` whose message names the
failing path and the expected type exactly. Get an **optional** one wrong and nothing fails at all: model schemas are
**loose**, so an unrecognized key is preserved rather than rejected, the member reads back `undefined`,
and the test passes for the wrong reason. Two shortcuts close that gap:

```ts
const wireBody = {model}Schema.encode(someModel);            // round-trip a model to a valid wire body
expect(() => {model}Schema.decode(fixture)).not.toThrow();   // validate a hand-written fixture once
```

Prefer the first: build the fixture as a typed model and encode it, so a member rename breaks the
fixture instead of passing a stale test. Validate any fixture you hand-write and reuse — it catches
fixture rot when the SDK is updated. Both schema consts are exported from the package root.

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
A response with a body makes the call fail with `DecodeError`; to test that, stub the body on a `200` —
`new Response(body, { status: 204 })` throws `TypeError`.

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

**Case B — the operation declares no error bodies.** It rejects with the base `ApiError`, whose
payload is always the `"undeclared"` arm — **raw bytes**, not a decoded body. Its `kind` is typed
`string`, so test for `rawBody` to reach the bytes:

```ts
import { ApiError } from "{package-name}";

const e = err as ApiError;
expect(e.status).toBe(422);
expect(e.payload.kind).toBe("undeclared");
if ("rawBody" in e.payload) expect(new TextDecoder().decode(e.payload.rawBody)).toContain("bad input");
```

**Take the arm union from the contract sheet per operation.** `"undeclared"` is reachable in Case A
too — any status the operation's matchers do not cover falls to it, a spec's `default` response
being no matcher — so an error test copied from a sibling operation can pass for the wrong reason,
landing in the `"undeclared"` branch and asserting nothing about the typed body you meant to check.

Use `try`/`catch` rather than a rejection matcher: matcher support for narrowing a rejected value
differs between runners, and the `catch` form reads the same everywhere.

These prove the reason is on the SDK error, not that the caller sees it. Also test through your own boundary:
fake the API's `4xx` with a reason and assert the reason is in **your** response — a test that checks
only the status passes on code that logs the reason and drops it.

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
    expect(outcome.payload.kind).toBe("{arm}");   // the error's own members, not the error object
  }
});
```

`outcome.headers` is the only way to read **response headers** on the *success* path, so test in this
mode when your code depends on one. Everything in *Cover the failures that are not an `ApiError`*
still rejects in this mode.

## Assert the outgoing request

`expect(stub.calls).toHaveLength(1)` proves only that something was sent. Assert the things a
regression would actually change:

```ts
it("sends the right request", async () => {
  const { client, stub } = clientReturning(jsonResponse(200, { id: "1" }));

  await client.{resource}.{operation}({ {pathField}: "abc", {queryField}: 2, body: { name: "x" } });

  const { url, request, body } = stub.last();
  expect(request.method).toBe("POST");
  expect(url.pathname).toBe("/{expected}/{route}/abc");                    // path field substituted
  expect(url.searchParams.get("{wire-query-name}")).toBe("2");             // query lives on the URL
  expect(request.headers.get("content-type")).toBe("application/json");
  expect(JSON.parse(body!)).toEqual({ name: "x" });                        // wire keys, wire dates
});
```

- **The SDK hands the fake one `Request` and no `init`.** Its `url` is absolute, so
  `new URL(request.url)` gives you `pathname` and `searchParams` for free rather than substring-matching
  a URL string. A fake that reads `init` reads nothing.
- **Read headers through `request.headers.get(...)`** — `request.headers` is a `Headers` with
  lowercased names, so a plain `request.headers["Authorization"]` is both the wrong type and the wrong
  case.
- **The body is already serialized by the time the fake sees it.** The captured `body` is the request
  body's **text** (or `undefined`), which is all a JSON, form-urlencoded or text body needs, with **wire
  aliases** and wire dates, because that is what encoding produces — assert on the parsed string; do not
  "fix" the aliases in the test. Read a multipart or binary body back off the captured `request`
  instead: a multipart one with `await request.formData()`, and a binary one with
  `new Uint8Array(await request.arrayBuffer())` — its text is lossy. A multipart `content-type`
  carries a generated boundary, so match it as a prefix, never with `toBe`. Compare a file part by its
  contents, `await new Response(form.get("{field}")).text()`: one sent without a file name may come
  back as a string or a `File`.
- **A list-valued query or form parameter has a per-parameter wire style.** Its `StyledParam` in
  `src/resources/{resource}.ts` carries a `style`: `plain` (the default —
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
  optional member is carried into the body rather than rejected. Only an assertion on the captured
  `body` catches it.
- **An encode failure never reaches your fake** — a bad body and an `undefined` path parameter alike
  reject with `EncodeError` and leave `stub.calls` **empty**; assert that in those tests.
- **`retry.timeout` never rides the request**; the fake sees it only as the `Request`'s `signal`.

## Test a paged operation

A paged operation sends one request per page, so queue one response per page and let the walk run.
`retry: { maxRetries: 0 }` keeps it to one request per page, and a queue that runs out is the signal
that a walk did not stop where you expected:

```ts
it("walks every page", async () => {
  const { client, stub } = clientReturning(
    jsonResponse(200, { items: [{ id: "1" }, { id: "2" }], nextCursor: "c2" }),
    jsonResponse(200, { items: [{ id: "3" }], nextCursor: null }),
  );

  const ids: string[] = [];
  for await (const item of client.{resource}.{operation}({ limit: 2 })) ids.push(item.id);

  expect(ids).toEqual(["1", "2", "3"]);
  expect(stub.calls).toHaveLength(2);
  expect(stub.calls[1]!.url.searchParams.get("cursor")).toBe("c2");   // the SDK advanced the state
});
```

Stub the stop signal the operation's strategy reads — a `null` or absent next cursor, a `hasMore` of
`false`, a page shorter than its `limit`, or an empty page — in **wire shape**, like any other body;
the operation's **Returns** bullet names the strategy and the condition that ends its walk. A `Link`-header
strategy reads the `Link` response header, and the SDK follows a link only on the client's own origin:

```ts
new Response(JSON.stringify(body), {
  status: 200,
  headers: { Link: '<{baseUrl}/{path}?cursor=c2>; rel="next"' },   // the base URL the client was built with
})
```

A failed page is tested like any failed call: queue an error status in the position of the page that
fails, and the walk throws `ApiError` (or the operation's own subclass) after yielding the pages before
it. Nothing is sent until a loop starts, so a test that calls the operation and never iterates asserts
that `stub.calls` is empty.

## Cover the failures that are not an `ApiError`

Every other failure rejects with another member of the `{Api}Error` family — narrowed on its closed
`kind` — and **never** matches an `ApiError` check (**typescript-error-handling**). Each `kind` is
reachable from the fake, which makes these paths genuinely testable rather than hypothetical:

| To produce | Make the fake `fetch` / the client |
| --- | --- |
| `kind: "connection"` | throw any error |
| `kind: "timeout"` | hang until aborted, with a tiny `retry.timeout` on the client |
| `kind: "decode"` | return a body that violates the schema (wrong type, bad date, a non-empty `200` where `undefined` is expected) |
| `kind: "encode"` | pass a request value its schema refuses — nothing reaches the fake |
| `kind: "auth"` | answer the **token** request with an error status (see below) |
| `kind: "pagination"` | answer a page of a `Link`-strategy walk with a next link on another origin — a `Link` header naming a host that is not the client's base URL |

```ts
import { {Api}Error } from "{package-name}";

it("maps a transport failure", async () => {
  const client = new {Api}Client({
    fetch: async () => { throw new Error("ECONNREFUSED"); },
    retry: { maxRetries: 0 },          // a connection failure is retried otherwise
  });

  try {
    await client.{resource}.{operation}({ /* ... */ });
    throw new Error("expected a rejection");
  } catch (err) {
    expect(err).toBeInstanceOf({Api}Error);
    expect((err as {Api}Error).kind).toBe("connection");
  }
});
```

⚠ **A timeout or abort test needs a fake that honours the `Request`'s `signal`**: one that ignores it
hangs the test until the runner kills it. What the fake rejects with does not matter — a timeout is a
`TimeoutError` the retry loop retries, which is why the test below sets `maxRetries: 0`.

```ts
const hangingFetch: typeof globalThis.fetch = (input, init) =>
  new Promise((_resolve, reject) => {
    const { signal } = new Request(input, init);
    signal.addEventListener("abort", () => reject(signal.reason), { once: true });
  });

it("times out", async () => {
  const client = new {Api}Client({ retry: { timeout: 10, maxRetries: 0 }, fetch: hangingFetch });

  await expect(client.{resource}.{operation}({ /* ... */ }))
    .rejects.toMatchObject({ kind: "timeout" });
});
```

A caller abort is **not** a `kind`: abort your own `AbortController` passed in `RequestOptions` and
assert the call rejects with exactly the `reason` you passed — not an `{Api}Error`, and never retried.

**A decode failure bypasses *both* response modes.** A 2xx body that does not satisfy the schema
rejects with `DecodeError`; `.asApiResult()` does **not** turn it into an `ok: false` result. Test that your
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
"auth"`, *not* an `ApiError` — carrying the token endpoint's `ApiError` on `.cause`. Return an
RFC 6749 error body from the **token** request and assert your configuration error, not a rejection
error:

```ts
it("treats bad credentials as a config error", async () => {
  const { client } = clientReturning(jsonResponse(401, { error: "invalid_client" }));  // no tokenResponse()
  await expect(service.{operation}()).rejects.toBeInstanceOf(MyProviderConfigError);
});
```

Being *refused* by the API is the other case: that is an `ApiError` with status 401/403 from the
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
const { request } = stub.last();                                // index from the end, not calls[0]
expect(request.headers.get("authorization")).toBe("Bearer T");
```

Or route on the path, when the order is what you are testing:

```ts
const stub = stubFetch((url) =>
  url.pathname.endsWith("/{token-path}") ? tokenResponse() : jsonResponse(200, { id: "1" }),
);
```

Or bypass acquisition entirely with a stub token strategy — a supported extension point
(**typescript-authentication**) — so the fake only ever sees your operation:

```ts
const stubStrategy = {                     // keep it a variable: inline, tryRefreshToken is a type error on the other grants
  getToken: async () => ({ accessToken: "T", tokenType: "Bearer" }),
  tryRefreshToken: async () => null,       // the authorization-code grant requires it
};

const client = new {Api}Client({
  {scheme}: { clientId: "id", clientSecret: "secret" },   // still required — the scheme is off without it
  {scheme}Strategy: stubStrategy,
  fetch: stub.fetch,
});
```

That credential fits the client-credentials grant. Match `{scheme}`'s type in `src/client-options.ts`:
`OAuth2PasswordCredentials` needs `username` and `password`, and `OAuth2AuthorizationCodeCredentials`
needs `redirectUri` and `promptForAuthorizationCode` (e.g. `async () => "code"`).

Facts that make these tests behave:

- The token **response** is wire-shaped (`access_token`, `token_type`, `expires_in`); the token
  request's shape is in **typescript-authentication**.
- The token endpoint may live on a **different server group**, so match on the path, not the host —
  read the group's URL from `DEFAULT_SERVER_OPTIONS` in `src/servers.ts`.
- The token is **cached on the scheme**, so only the first call fetches one: a test making two calls
  against one client sees three requests, not four. Build a fresh client per test to reset it.
- The token request and the operation each run on their own `retry.timeout`, so a tiny timeout in an
  OAuth test can fire on the token request — which ends the call with a `TimeoutError` for the token
  endpoint, not retried unless `httpMethodsToRetry` names `POST`.

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

Pick one approach. An interceptor sees nothing once a `fetch` option is supplied, and one that patches
`globalThis.fetch` must be installed before the client is built (**typescript-client-initialization**).

## Keeping tests independent of SDK internals

- **Import only from the package root** (**typescript-client-initialization**); read `src/` to learn a
  shape, never to import from it.
- **Never assert on an error's `message`.** An `ApiError`'s is the call and its status —
  `POST https://… failed with 400` — which moves whenever the base URL or the route does. It is not a
  contract. Assert `err.status` and the narrowed `err.payload`.
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

**Override every group the test touches** — a token endpoint on its own group otherwise reaches the
real host (**typescript-configuration-resilience**). `src/servers.ts` lists the groups and their
environments.

Against a **live sandbox**, keep those tests separate from unit tests, skip them when credentials are
absent, and never assert on ids or timestamps the provider generates:

```ts
const hasCredentials = Boolean(process.env.{API}_CLIENT_ID);

describe.skipIf(!hasCredentials)("integration", () => {
  it("{operation}", async () => {
    const client = new {Api}Client({
      serverEnvironment: ServerEnvironment.{SandboxEnvironment},   // state it, never rely on the default
      {scheme}: { /* from env */ },
      retry: { timeout: 15_000 },                                   // per attempt; retries stay on
    });
    const result = await client.{resource}.{operation}({ /* ... */ });
    expect(result.{member}).toBeDefined();
  });
});
```

Expect flakiness from the provider, not from your code, and never gate CI on a third party's uptime
unless you mean to.

## Notes

- **The response's `content-type` picks no decoder.** The decoder is fixed by the operation, so a stubbed
  `Response` needs no `content-type` header; setting one is harmless documentation. What matters is
  that the body parses and satisfies the schema. A binary response is the exception: its result
  reports `content-type` and the `content-disposition` file name, so stub them when your code reads them.
- A stubbed `401` invalidates the cached OAuth token, so the *next* call in the same test fetches a new
  one — queue another `tokenResponse()` for it.
- **Testing the retry policy itself**: drop `maxRetries: 0`, queue one response per attempt (a queue
  that runs out throws, and the loop retries that as a connection failure), pass `delay: 0`, and count
  requests:
  ```ts
  const stub = stubFetch(queue(jsonResponse(503, {}), jsonResponse(503, {}), jsonResponse(200, { id: "1" })));
  const client = new {Api}Client({ fetch: stub.fetch, retry: { delay: 0 } });

  await client.{resource}.{operation}({ /* ... */ });   // an operation whose method is in the gate
  expect(stub.calls).toHaveLength(3);
  ```
  A stubbed `Retry-After` overrides `delay`; a backoff test wants `maxJitter: 0` and fake timers. Worth
  covering: a write outside the gate is sent **once**, a widened write re-sends the **same**
  `Idempotency-Key`, and an abort stops retrying.
- **Never guess a base URL.** With a fake `fetch` nothing is dialled and the host is irrelevant; if you
  match on URLs, take the prefix from `DEFAULT_SERVER_OPTIONS` rather than from memory — environments
  differ per API.
- Mocking libraries work too — the seam is a plain function, so a `vi.fn()` / `jest.fn()` returning a
  `Response` satisfies it. The hand-written stub above gives you typed captured requests and ordered
  responses for free.
