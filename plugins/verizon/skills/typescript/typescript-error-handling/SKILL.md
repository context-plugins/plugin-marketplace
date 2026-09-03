---
name: typescript-error-handling
description: Error handling for an APIMatic-generated TypeScript SDK — load before writing any try/catch around an SDK call, an error-translation layer, or middleware. Covers the two disjoint error families and which types actually reach your catch blocks, reading the status and the declared error body safely, the failures the non-throwing form does not convert, the missing field that is silently undefined rather than an error, and the traps that make an otherwise reasonable catch ladder silently wrong.
---

# Error handling for an APIMatic TypeScript SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Api}Client`,
> `{Api}Error`, `{package-name}`, `{Resource}`, `{Operation}`, `{arm}`) — replace it with the concrete
> identifier from the source.
>
> **One skill, every error shape.** This file covers every shape the generator can emit. Which shapes
> YOUR SDK uses — whether an operation declares typed arms or rejects with the base error, what each
> arm is called, which status it covers — are facts of the API definition, not of this skill: take
> them from the operation's page in `map/operations/{resource}.md` and **apply only the guidance that
> matches**. An API can declare typed errors on every operation, on none, or on a mix.

Operations are **throw-based** (for a non-throwing alternative, see **The non-throwing form** below),
and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two
branches can never overlap and a complete `catch` needs **both**.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with
  a generated subclass of it where the spec declared error bodies for that operation. Anything outside
  `200`–`299` is a failure, so a `3xx` lands here too.
- **Family B — no usable response was produced.** The call rejects with a member of the `{Api}Error`
  set. `{Api}Error` is the SDK-branded alias of the runtime's `CoreError` and is **abstract** — use it
  for `instanceof`, never construct it.

```ts
import { ResponseError, {Api}Error } from "{package-name}";

try {
  await client.{resource}.{operation}({ /* ... */ });
} catch (err) {
  if (err instanceof ResponseError) {
    // The API answered with an error status — read err.status and err.payload.
  } else if (err instanceof {Api}Error) {
    // No usable response — err.kind says which.
  } else {
    throw err;   // not from the SDK
  }
}
```

## What to import, and from where

Everything below comes from **one specifier — the package root**. Deep imports
(`{package-name}/core/…`) do not resolve: the `exports` map exposes `.` and `./package.json` and
nothing else.

| import | what it is |
| --- | --- |
| `ResponseError` | Family A base — the type every error status rejects with |
| `{Resource}.{Operation}Error` | the generated Family A subclass, on the **resource class's merged namespace** — not a free-standing export |
| `{Api}Error` | Family B base, **abstract**. The SDK-branded alias of `CoreError`, which is not exported under its own name |
| `ConnectionError` `TimeoutError` `AbortError` `SdkError` `SchemaError` `AuthError` | the six concrete Family B classes |
| `type ErrorKind` `ErrorPayload` `Declared` | type-only helpers, if you name them in your own signatures |

`{Api}Error` is the SDK-branded name — **read the real one** from the `CoreError as …Error` line in
`src/index.ts`. It is the API name plus `Error` (`Acme` gives `AcmeError`), escalating to
`{Api}ApiError` and then a numeric suffix when that would collide with something the same clause
already re-exports (an API named `Sdk` cannot take `SdkError`).

Everything under `src/core/` is vendored static code, **byte-identical in every generated TypeScript
SDK**, so the behaviours below hold without checking yours. What varies per SDK is which operations
declare arms, and what those arms are called.

## Family A — the API answered

```ts
class ResponseError<P = Undeclared> extends Error {
  readonly status: number;                 // the HTTP status
  readonly headers: Headers;               // the response headers
  readonly payload: ErrorPayload<P>;       // the decoded error body, as a discriminated union
  // message is `${status} ${statusText}` — e.g. "404 Not Found"
}
```

`status` and `headers` are always there, for any error status, declared or not — you never have to
choose between a typed body and knowing the status.

⚠ **`err.message` deliberately omits the body.** It is only `${status} ${statusText}` —
`"422 Unprocessable Entity"`. That keeps response bodies out of logs and stack traces by default,
which is a sound default and a trap: a handler that logs `err.message` and nothing else records that
something failed and discards every diagnostic. Read `err.payload` explicitly and log the fields you
choose.

`err.headers` is the `fetch` `Headers` object, not a plain object — look a header up with
`err.headers.get("x-request-id")` (case-insensitive). Indexing it (`err.headers["x-request-id"]`) is
always `undefined`, and spreading it gives you nothing.

### Which error does an operation reject with?

Four places give you the answer, in order of preference:

1. **`map/operations/{resource}.md`** — the operation's **Error** bullet names the case, and for a
   typed operation the **Error arms** bullet lists every arm with the status each covers and whether it
   has a body. Start here.
2. **The **Signature** bullet on the same page** — the same fact as the second type argument of the
   returned `ApiPromise<T, E>`.
3. **`api-reference.md`** — per-operation prose, when you need what an arm *means* rather than its
   shape.
4. **`src/resources/{resource}.ts`** — the source. The subclass's `static readonly errors` table is
   the matcher list itself: one row per arm, each spelling `on` (the status or `[from, to]` range),
   `kind`, and the decoder.

All of these ship inside `node_modules/{package-name}/`, so read them there rather than the compiled
`dist/`.

- **Case A — typed arms.** The spec declared failure bodies, so the generator emitted a subclass named
  `{Operation}Error`, exported from the **enclosing class's merged namespace** — you catch
  `{Resource}.{Operation}Error`, or `{Api}Client.{Operation}Error` for an operation the spec left
  untagged. Narrow on `err.payload.kind`.
- **Case B — no typed arms.** `E` is the **base `ResponseError`**, its payload is always the
  `"undeclared"` arm, and there is no subclass to catch.

Guessing wrong is *sometimes* a compile error and sometimes not, and the direction that looks safe is
the dangerous one. A subclass that does not exist fails to compile — that guess TypeScript catches. But
naming a **neighbouring** operation's error class compiles cleanly, because it is a real type, and then
never matches at runtime: the rejection sails past your `catch` and surfaces somewhere else, or not at
all. Take the case from the map every time; the compiler is not a check on this.

### Case A — reading the typed payload

> **This section applies only where the operation declares typed arms.** An operation whose **Error**
> bullet names the base `ResponseError` has nothing to narrow — its payload is always `"undeclared"`.
> Skip to **Case B**.

`err.payload` is a discriminated union with **one arm per failure response the spec declared**, plus
`"undeclared"`. Two things about arm names catch people out:

- **The name comes from the body's schema, not from the status.** An arm whose body is a direct model
  reference is named after that model in lower camel (`apiError`); anything else — a primitive, an
  array, a map, or no content — is named `error{Status}` (`error400`, `error4XX`). So two statuses that
  return the *same* model give you two arms whose names differ only by a numeric suffix (`apiError`,
  `apiError2`). Read the arm names off the map; do not derive them from the status.
- **One arm can still cover many statuses** — not because two statuses were merged, but because the
  spec declared a *range*. A `4XX` arm covers `[400, 499]`, and a `default:` arm covers **`[400, 599]`
  only**, so a `304` falls through a `default:` arm into `"undeclared"`. Check `err.status` when you
  need the specific one.

```ts
import { {Resource} } from "{package-name}";

try {
  await client.{resource}.{operation}({ /* ... */ });
} catch (err) {
  if (err instanceof {Resource}.{Operation}Error) {
    switch (err.payload.kind) {
      case "{arm}":
        // err.payload.body is the declared model for this arm (or undefined if the arm declares none)
        console.error(err.status, err.payload.body);
        break;
      // ... KEEP GOING: one case for EVERY arm the map lists — do not stop early ...
      case "undeclared":
        console.error(err.status, new TextDecoder().decode(err.payload.rawBody));
        break;
    }
  }
}
```

**`"undeclared"` is always an arm, and it is not a catch-all.** It carries
`{ kind: "undeclared"; rawBody: ArrayBuffer }` and fires **only** for statuses no declared arm covers.
A status that has an arm lands in that arm and leaves `"undeclared"` unreached — so a `catch` that
handles only `"undeclared"` silently drops every typed body. Handle every arm the map lists, and put
`"undeclared"` last. There is no operation whose failure is guaranteed typed: the generator emits the
`"undeclared"` arm unconditionally, so any operation can hand you raw bytes for a status it does not
document.

An arm can declare **no body** (`body: undefined`) — the spec named the status but gave it no schema.
The arm still exists and still tells you which status class you are in.

**The arms are per operation, and are not one set across the API.** A description that declares a
different error schema per tag gets a different model — and therefore a differently-named arm — per
tag, so a branch written against one operation's arm does not apply to a sibling's. Take the arms from
that operation's **Error arms** bullet every time; never reuse a set from a neighbouring call.

Where your boundary treats several arms alike, group them with fall-through cases rather than
repeating the body — but only over fields they **all** declare:

```ts
switch (err.payload.kind) {
  case "{arm1}":
  case "{arm2}":
    // narrowed to {arm1} | {arm2} — only their common fields are reachable here
    report(err.status, err.payload.body);
    break;
  case "undeclared":
    report(err.status, new TextDecoder().decode(err.payload.rawBody));
    break;
}
```

### Case B — the base `ResponseError`

Nothing to narrow. Read the status and the raw bytes straight off it:

```ts
try {
  await client.{resource}.{operation}({ /* ... */ });
} catch (err) {
  if (err instanceof ResponseError) {
    console.error(err.status, err.headers.get("x-request-id"));
    if (err.payload.kind === "undeclared") {
      console.error(new TextDecoder().decode(err.payload.rawBody));
    }
  }
}
```

`rawBody` is bytes, not text, and a Case B body may not be JSON at all — a gateway or proxy can answer
with HTML or plain text. Decode it to a string before you try to parse it, and expect the parse to fail.

### Matcher precedence

For a subclass with several arms, an **exact numeric status is matched across the whole table first**;
only then does the first covering range win. So a specific `404` arm beats a `4XX` arm regardless of
declaration order. The generator also emits the rows narrowest-first, so a `default:` arm cannot shadow
a `5XX` one.

### Catch order

Narrow from most specific to least. A generated subclass extends `ResponseError`, so the subclass arm
must come first or it is unreachable:

```ts
try {
  await client.{resource}.{operation}({ /* ... */ });
} catch (err) {
  if (err instanceof {Resource}.{Operation}Error) {
    // typed arms available on err.payload.kind
  } else if (err instanceof ResponseError) {
    // any other error status — payload is "undeclared"
  } else if (err instanceof {Api}Error) {
    // transport / SDK-side failure
  } else {
    throw err;
  }
}
```

## Family B — the `{Api}Error` set

One class per `kind`, all extending the abstract `{Api}Error`. Narrow on `err.kind` — it is a literal
union, so a `switch` over it is exhaustive:

| `err.kind` | Class | Means |
| --- | --- | --- |
| `"connection"` | `ConnectionError` | the `fetch` call rejected, or the body read failed mid-stream |
| `"timeout"` | `TimeoutError` | the client-level `timeout` elapsed |
| `"abort"` | `AbortError` | the per-call signal aborted (including one already aborted) |
| `"sdk"` | `SdkError` | a defect on the SDK side — an unfilled path placeholder, no reachable `fetch`, a response the decoder could not handle |
| `"schema"` | `SchemaError` | a value failed its schema in **either** direction |
| `"auth"` | `AuthError` | a credential could not be **obtained** |

Every one carries `message` and, where there was an underlying failure, `cause`.

```ts
if (err instanceof {Api}Error) {
  switch (err.kind) {
    case "timeout":
    case "connection":
      // retryable-shaped: nothing was learned about the request's fate
      break;
    case "abort":
      // the caller cancelled — usually not an error to report
      break;
    case "schema":
      // a contract mismatch, not a transient failure
      break;
    case "auth":
    case "sdk":
      // a configuration or code defect
      break;
  }
}
```

### `AuthError` is never a 401

**`AuthError` is about obtaining a credential, not about being refused one.** A 401 *from the API* is a
Family A `ResponseError` like any other status. The two are disjoint and one arm cannot absorb the
other.

A 401 does have one auth consequence: it **invalidates whatever that operation's scheme had cached**,
so the **next** call re-acquires. The current request is **not** retried — it fails, and recovery
happens on the following attempt. If you want the current call to succeed after a token refresh, retry
it yourself.

`AuthError` itself means the token grant failed, or PKCE was disabled without a client secret. When the
grant failed, **`.cause` is the token endpoint's own `ResponseError`** — that is where the token
endpoint's status and body are, and the only place a "bad client credentials" diagnosis can be read.
Never log an `AuthError` without its `cause`.

Auth resolves *before* the request is built, so an `AuthError` means **nothing was sent** — it is a
configuration fault, not a rejection. Check it early in your ladder.

⚠ **The token is acquired lazily, on first use — so an auth misconfiguration surfaces from an
operation call, not from client construction.** The rejection points at whichever operation happened to
run first, which reads like a problem with that operation rather than with the credentials you wired
up. It also rejects in `.asApiResult()` mode, for the same reason: the grant happens before a request
exists to return a result for.

### `SchemaError` — three different facts wearing one type

`SchemaError` fires in both directions, and which one it was matters a lot:

- **Outbound** — a request field failed encoding. **No request reached the network.** This is a bug in
  your code (a wrong type, a bad date format), not an API failure. Never retry it, and do not let a
  production ladder quietly absorb it — it is the same class of thing as an unfilled path placeholder
  (`SdkError`) or a mistyped request object, and it should fail loudly in development.
- **Inbound, on a success status** — the API answered `2xx` and the SDK could not decode the body:
  malformed JSON, a schema mismatch, or a non-empty body on an operation declared to return none. The
  outcome is genuinely **unknown**.
- **Inbound, on a declared error arm** — and this one is a trap. The arm's body is decoded **while the
  `ResponseError` is still being constructed**, so a `SchemaError` there **replaces** the
  `ResponseError` entirely. Your Family A `catch` never fires, and `err.status` is gone with it.
  Identical type, opposite meaning: the success case is "outcome unknown", this case is "you were
  rejected and I lost the reason". Mapping both onto one 5xx is wrong half the time — it tells a
  retrying caller to keep retrying something that can never succeed.

Only a **declared** arm can do this. The `"undeclared"` arm reads raw bytes and never decodes, so a
Case B operation cannot lose its status this way.

```ts
if (err instanceof SchemaError) {
  console.error(err.message);   // names the failing path: "amount: expected number, received string"
  console.error(err.rawBody);   // the value that failed — the parsed body, or your input
}
```

The `message` already names the path and the expectation, so log it before reaching for `rawBody`. If
you need the status on the error-arm case, capture it in a wrapping `fetch` — the SDK has already
discarded it by the time your `catch` runs.

### A missing field is not a `SchemaError` — it is `undefined`

This is the gap the error types leave, and the one most likely to reach production. A model member the
description did not mark **required** is emitted as `member?: T` over an optional schema entry, so a
response that simply **omits** it validates cleanly. No `SchemaError` is thrown, and nothing warns you:

```ts
const value = await client.{resource}.{operation}({ /* ... */ });  // 200, truncated body
value.{member};   // undefined — not an error, and not a null you declared
```

A `SchemaError` on a success status means a **type** mismatch or an unparseable body, not an absent
field. So the guard belongs on the value, not in the `catch`:

```ts
const value = await client.{resource}.{operation}({ /* ... */ });
if (value.{member} === undefined) {
  throw new MyProviderUnreadable("{operation} returned no {member}; outcome unknown");
}
```

**Assert on the members you actually depend on, right after every call that matters.** For a write, an
absent identifier has the same "outcome unknown" character as a decode failure — the call may have
taken effect and you cannot name what it created. Which members are required is the `Req` column of the
operation's **Fields** table; nothing in the SDK checks the rest for you. The same is true of a **typed
error arm**: an arm whose fields are all optional will accept almost any JSON object, so
`err.payload.kind === "{arm}"` does not guarantee `err.payload.body.{member}` is there. See
**typescript-models**.

## The non-throwing form

`.asApiResult()` turns the **HTTP error status** branch into a value. It does **not** make the call
non-throwing: Family B still rejects.

```ts
try {
  const outcome = await client.{resource}.{operation}({ /* ... */ }).asApiResult();

  if (outcome.ok) {
    use(outcome.value);
  } else {
    // outcome.status, outcome.headers, outcome.errorMessage, outcome.error (the payload)
  }
} catch (err) {
  // still needed — Family B lands here
}
```

The split is mechanical: **`200`–`299` is `ok: true`, every other status is `ok: false`.** No nuance,
no per-status judgement. Reach for it when an error status is an expected outcome (a `404` meaning "not
found yet", a `409` meaning "already exists") and you would otherwise be using exceptions for control
flow, or when you need `status` and `headers` on the *success* path.

Two mechanics to know: `outcome.error` is the **payload**, not the `ResponseError` — so you narrow on
`outcome.error.kind`, exactly as you would on `err.payload.kind`; and `.asApiResult()` must be called
on the value the operation returned, **before any `.then()`**, because `ApiPromise` overrides
`Symbol.species` and the method is gone from what `.then()` hands back (see
**typescript-calling-endpoints**).

⚠ **This mode is not rejection-free, and the cases it does not convert are the ones people assume it
does.** A decode failure is not an API error, so it propagates in both modes rather than becoming an
`ok: false` value — a `SchemaError` on a `2xx` body, and a `SchemaError` on a **declared error arm**,
both still reject. So does a failed token acquisition, because the credential is resolved while the
request is being built, before anything is sent. `try`/`catch` is still required around
`.asApiResult()`; it narrows what you catch, it does not remove the need to catch.

## Transport failures, and guarding every call site

Family A covers only the case where the API answered. It does **not** cover a host that is unreachable,
DNS that failed, a connection that dropped, or the client-level timeout elapsing — those are Family B,
and a `catch` whose only arm is `err instanceof ResponseError` lets them escape and take down whatever
was running the call.

**Unlike SDKs that let their HTTP library's exceptions through, this one wraps them.** Whatever your
`fetch` rejects with becomes a `ConnectionError`, with the original on `.cause` — so your boundary
never imports the transport's exception types, and it does not need revisiting when you swap `fetch`
for a wrapper. Two things pass through unwrapped: anything that is already an SDK error (a `CoreError`
subclass your own wrapper threw), and an abort, which surfaces as `AbortError` or `TimeoutError`
according to which signal fired. If you wrap `fetch` to add retries or logging
(**typescript-configuration-resilience**), throw an SDK error type from it or accept that yours will
arrive as `err.cause`.

**Convert both families to your own error type in one place.** If you wrap the SDK behind your own
abstraction (a client interface, a service, a repository), do the conversion at that boundary so the
rest of the code has one failure type to handle instead of three:

```ts
function translate(err: unknown): never {
  // Most specific first — the typed subclass, then any other error status.
  if (err instanceof {Resource}.{Operation}Error && err.payload.kind === "{arm}") {
    throw new MyValidationError(err.payload.body, { cause: err });
  }
  if (err instanceof ResponseError) {
    if (err.status === 404) throw new MyNotFoundError({ cause: err });
    if (err.status === 429) throw new MyRateLimitedError(err.headers.get("retry-after"), { cause: err });
    throw new MyUpstreamError(err.status, { cause: err });
  }
  if (err instanceof {Api}Error) {
    if (err.kind === "timeout" || err.kind === "connection") {
      // Nothing was learned about the request's fate. For a write, that is "unknown", not "failed" —
      // the bytes may have reached the API before the failure. Tell the caller that, don't say it failed.
      throw new MyTransientError({ cause: err });
    }
    throw new MyIntegrationDefect(err.message, { cause: err });
  }
  throw err;
}
```

Always pass `{ cause: err }` — the SDK's own errors chain their underlying failure that way (an
`AuthError` hides the token endpoint's `ResponseError` there, a `SchemaError` the validator's report),
and dropping the link is what makes production diagnosis hard.

**Guard every call site, not just the ones that change data.** It is easy to wrap the calls that create
or modify something and overlook the calls that only read — especially reads on a routine path (loading
a screen, a scheduled job, a startup or health check). A connection failure during a read fails just as
hard as one during a write. A call left unguarded next to one that is guarded is the one that breaks.

⚠ **A rejection you never await is silently swallowed.** `ApiPromise` attaches its own no-op `.catch()`
at construction, so a fire-and-forget call produces **no `unhandledRejection`** — the failure
disappears without a trace. Await every call, or attach your own handler.

## Presenting failures at your boundary — coherent, distinct, leak-free

The catches above decide what you catch; this decides what the caller (an HTTP response, a UI layer,
another service) sees. Get it wrong and every failure looks the same, or an internal diagnostic ends up
on the wire. Three rules, applied at the one boundary where SDK failures become your own error type:

**Handle each failure kind the same way everywhere.** One mapping from failure kind → outcome, applied
identically at every call site — same order, same conversion. When the same kind of failure becomes a
different result on a different operation, callers cannot reason about it.

**Keep distinct failures distinct.** Family A always hands you `status`, so that is your discriminator
— and where the operation declares arms, `payload.kind` says more than the status does, because it
names the *body* the API sent rather than the class of failure. Carry whichever you keyed on into your
own error type; a status dropped at this boundary cannot be recovered downstream. Collapsing everything
into one blanket status (502 for all of it) throws away the only signal that separates "you sent
something invalid" from "the provider is down".

One ladder, in the single place where your error type becomes a caller-facing status. This is where the
discriminator you carried gets read back — a ladder with **no branch reading it** is incomplete:

```ts
function toHttp(err: unknown): { status: number; message: string } {
  // OUR quota is spent — the caller did nothing wrong and cannot fix it.
  if (err instanceof MyRateLimitedError) return { status: 503, message: "Temporarily unavailable." };

  if (err instanceof MyUpstreamError) {
    // OUR credentials — likewise not the caller's to fix.
    if (err.status === 401 || err.status === 403) return { status: 502, message: "Provider unavailable." };
    // The provider rejected THE CALLER'S request — hand back the same status so they can act on it.
    if (err.status >= 400 && err.status < 500) return { status: err.status, message: err.message };
    return { status: 502, message: err.message };
  }

  // Transport, timeout, provider 5xx — no meaningful caller status.
  if (err instanceof MyTransientError) return { status: 502, message: "Provider unreachable." };
  return { status: 500, message: "Unexpected error." };
}
```

**Not every provider failure is the caller's fault.** A `401`/`403` means *your* credentials are wrong
and a `429` means *your* quota is spent — passing either straight through tells the caller they are
unauthenticated or throttled when they are neither. Those belong in the 5xx bucket; validation,
conflict and not-found are the caller's to fix. And keep the default arm at 5xx: a status you have not
mapped is an unknown, not a caller error — the provider can add one without warning you.

**An unreadable body is not one case but two — decide which before you map it.** An unreadable
**success** body is genuinely unknown: 5xx. An unreadable **error** body is not — the provider rejected
the request and only the *detail* was lost, so answering 5xx tells a retrying caller to keep retrying
something that can never succeed. The `SchemaError` section above is where that distinction comes from,
and neither case can be read off the error's type.

**Never map a decode failure onto a domain absence.** "I could not read the answer" is not "the
provider said no." It is tempting on a lookup — an unreadable body and a genuine miss both leave you
without a record — but only one of them is a *fact*. Where a lookup gates a create, that conversion
turns a corrupt response into a spurious create; more generally it produces a confident wrong answer,
which is worse than an error. If the operation's miss really is signalled by an empty body, match on
*empty*, not on *unparseable*.

**Never put an SDK `message` on the wire.** A `SchemaError`'s message names a field path and the value
that failed; a `ResponseError`'s is the upstream status line. Both are diagnostics for your logs, not
copy for your caller. Log the SDK error with its `cause`; return a message you wrote.

## `instanceof` across the ESM/CJS boundary

`instanceof` is reliable **within one dialect**. A process that loads both — `import` in one file,
`require` in another — gets **two independent copies** of every error class, and `instanceof` across
that boundary is `false`. It fails silently: a `catch` arm simply never matches.

If your process might do that, narrow on a value instead:

```ts
// Family B, dialect-safe:
if (typeof err === "object" && err !== null && "kind" in err) { /* err.kind */ }

// Family A, dialect-safe:
if (typeof err === "object" && err !== null && "status" in err && "payload" in err) { /* ... */ }
```

`err.name` is also stable across copies (each class sets it from its own constructor name).

## Notes

- **No retries.** A failed call rejects once. `Retry-After` is not read, and nothing is retried —
  including a 401 after a token invalidation. A retry wrapper is yours to build around `fetch`; see
  **typescript-configuration-resilience**.
- **A single `401` is not a permanent credential failure.** It invalidates the cached token without
  resending; the caller sees that one `401`, and the *next* call acquires afresh. Do not tear down a
  client or alert on one.
- **No error logging.** `src/core/` contains no `console` call. Log in your `catch`, or in a wrapping
  `fetch`.
- **No raw `Response`.** `status` and `headers` are on `ApiResult` and on `ResponseError`; the `fetch`
  `Response` is deliberately unreachable.
- **A missing credential is not an error.** An unset credential member sends no credential, so the
  failure surfaces as a Family A `401` from the API rather than anything at construction — which reads
  like an expired token instead of a config bug. This holds for composite schemes too: a partially
  configured `all`/`any` scheme sends what it has rather than refusing, so there is no local "auth
  could not be satisfied" rejection to catch. See **typescript-client-initialization**.
- **Some `SdkError`s are thrown by the constructor, not by a call** — no reachable `fetch`, or a
  basic-auth username containing a colon. Wrap client construction too if it runs on a path that must
  not crash.
- **SDK errors do not survive a worker or process boundary intact.** `structuredClone` and
  `postMessage` reduce an `Error` subclass to a plain `Error` — `name`, `message` and `cause` survive;
  `status`, `payload`, `kind` and `rawBody` do not. Convert to your own serializable shape *before* you
  post it, not after.

## Next

- Timeouts, cancellation, retry wrappers → **typescript-configuration-resilience**
- Asserting error paths in tests → **typescript-testing**
- Which arms an operation declares → `map/operations/{resource}.md`, the **Error arms** bullet
