---
name: typescript-error-handling
description: Error handling for an APIMatic-generated TypeScript SDK — load before writing any try/catch around an SDK call, an error-translation layer, or middleware. Covers the one error family and its closed err.kind, the four throwables that sit outside it, which types actually reach your catch blocks, reading the status and the declared error body safely, the default arm that degrades instead of throwing, the failures the non-throwing form does not convert, the missing field that is silently undefined rather than an error, and the traps that make an otherwise reasonable catch ladder silently wrong.
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
and every **operational** failure belongs to **one family**: `{Api}Error`, a union over six leaves.
One `instanceof {Api}Error` sees all of them, and `err.kind` says which one it is. Four throwables sit
**outside** the family — a configuration fault, a codec called directly, a bug, and a caller abort —
so a `catch` that tests the family has to rethrow whatever is left.

```ts
import { {Api}Error } from "{package-name}";

try {
  await client.{resource}.{operation}({ /* ... */ });
} catch (err) {
  if (err instanceof {Api}Error) {
    switch (err.kind) {
      case "api":
        // The API answered with an error status — read err.status and err.payload.
        break;
      case "decode":
        // The answer did not fit the spec — read err.status and err.cause.
        break;
      case "encode":
        // Nothing was sent — err.cause is the SchemaError that rejected the value.
        break;
      case "connection":
      case "timeout":
      case "auth":
        // No response was produced — err.kind says which.
        break;
    }
  } else {
    throw err;   // outside the family: an abort's reason, a configuration fault, or a bug
  }
}
```

Every member of the family names the call it raised: `err.method` and `err.uri`, and `err.message`
opens with that pair — `"POST https://api.example.com/v1/{resource} failed with 422"`.

## What to import, and from where

Everything below comes from **one specifier — the package root**. Deep imports
(`{package-name}/core/…`) do not resolve: the `exports` map exposes `.` and `./package.json` and
nothing else.

| import | what it is |
| --- | --- |
| `{Api}Error` | the whole family — a type **and** a value. The type is the union of the six leaves; the value is the abstract class they all extend, so `instanceof` and `err.kind` select the same set. It cannot be constructed or extended. The SDK-branded alias of `CoreError`, which is not exported under its own name |
| `ResponseError` | the part of the family the server answered on — `ApiError \| DecodeError`, the two that carry `status` and `headers`. A type and a value, like `{Api}Error` |
| `ApiError` | `kind: "api"` — the API answered with an error status. The base every operation without declared error bodies rejects with, and the class every per-operation error extends |
| `{Resource}.{Operation}Error` | the generated `ApiError` subclass for an operation that declares error bodies, on the **resource class's merged namespace** — not a free-standing export |
| `DecodeError` `EncodeError` `ConnectionError` `TimeoutError` `AuthError` | the other five leaves |
| `ConfigurationError` `SchemaError` | outside the family: a constructor fault, and a codec called directly |
| `type ErrorKind` `ErrorPayload` `Declared` `Undeclared` `HttpMethod` | type-only helpers, if you name them in your own signatures |

`{Api}Error` is the SDK-branded name — **read the real one** from the `CoreError as …Error` line in
`src/index.ts`. It is the API name plus `Error` (`Acme` gives `AcmeError`), escalating to
`{Api}ApiError` and then a numeric suffix when that would collide with something the same clause
already re-exports (an API named `Api` cannot take `ApiError`).

Everything under `src/core/` is vendored static code, **byte-identical in every generated TypeScript
SDK**, so the behaviours below hold without checking yours. What varies per SDK is which operations
declare arms, and what those arms are called.

## The family — every `err.kind`

`ErrorKind` is closed, so a `switch` over `err.kind` is exhaustive:

| `err.kind` | Class | What happened | Adds |
| --- | --- | --- | --- |
| `"api"` | `ApiError` | the API answered with an error status | `status` · `headers` · `payload` |
| `"decode"` | `DecodeError` | the answer could not be turned into the declared value — the body was not JSON, failed its schema, arrived where none is declared, or died mid-read after the response line | `status` · `headers` |
| `"encode"` | `EncodeError` | a request value did not match its declared type, so **nothing was sent** | — |
| `"connection"` | `ConnectionError` | `fetch` rejected before a response line arrived | — |
| `"timeout"` | `TimeoutError` | an attempt ran out its `retry.timeout`, and no retry was left | `timeout` — the budget that ran out |
| `"auth"` | `AuthError` | a credential could not be **obtained** | — |

Every one carries `kind`, `method`, `uri`, `message` and, where there was an underlying failure,
`cause`. `uri` is the absolute URL the call dialled, with the server variables expanded and the path
parameters filled. It carries no query, fragment or userinfo, so no query parameter reaches it — a
credential sent in the query included. One failure names an unresolved URI: a path parameter rejected
by its schema arrives as an `EncodeError` whose `uri` still shows the unfilled `{braces}`.

⚠ **`err.message` never carries a value from the wire.** It is the call plus what went wrong —
`"GET https://… failed with 404"`, `"… failed: Response body could not be decoded."` — never a body,
a header or a value that failed its schema. That keeps response bodies and secrets out of logs and
stack traces by default, which is a sound default and a trap: a handler that logs `err.message` and
nothing else records that something failed and discards every diagnostic. Read `err.payload` (or
`err.cause`) explicitly and log the fields you choose — and on a `4xx` the caller caused, also put the
API's reason in your response.

`err.headers` is the `fetch` `Headers` object, not a plain object — look a header up with
`err.headers.get("x-request-id")` (case-insensitive). Indexing it (`err.headers["x-request-id"]`) is
always `undefined`, and spreading it gives you nothing.

## Four throwables outside the family

`instanceof {Api}Error` is `false` on each of these, so a `catch` that tests the family and then
stops has swallowed nothing — it just has to **rethrow the rest**, as the ladder at the top does.

- **`ConfigurationError`** comes out of the **client constructor**, synchronously and before any
  call exists: no reachable `fetch`, a basic-auth username containing a colon (RFC 7617 §2), or an
  unknown `serverEnvironment`. It is not a call failure, so it names no call. Wrap construction too
  if it runs on a path that must not crash.
- **`SchemaError`** is what a model's schema value throws when **you** call it directly —
  `{model}Schema.decode(json)`. Through an operation the same failure arrives one level down, as the
  `cause` of a `DecodeError` or `EncodeError` that does name the call. Its `message` names the field
  and the type expected, never the value; `cause` carries the issue list. A `serverOptions` override
  whose value is not a string raises it from the constructor too.
- **A bug reaches you raw** — a `baseUrl` that does not parse, or a non-file value where a `FileInput`
  was declared, is a plain `TypeError` naming no call.
- **A caller abort arrives as the signal's own `reason`**, unwrapped — whatever you passed to
  `abort()`, or the `DOMException` a bare `abort()` supplies. It is yours, not the SDK's, so it is
  deliberately not in the family, and never retried. The per-attempt `retry.timeout` is the SDK's own
  and **does** stay in it, as a `TimeoutError`.

`ConfigurationError` and `SchemaError` are exported from the package root; the other two are not the
SDK's to export.

## `"api"` — the API answered

```ts
class ApiError {
  readonly kind: "api";
  readonly status: number;           // the HTTP status
  readonly headers: Headers;         // the response headers
  readonly payload: /* the decoded error body, as a discriminated union */;
  readonly method: HttpMethod;       // the call it names
  readonly uri: string;
}
```

`status` and `headers` are always there, for any error status, declared or not — you never have to
choose between a typed body and knowing the status. Anything outside `200`–`299` is an error status,
so a `3xx` lands here too.

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
   the matcher list itself: one row per arm, each spelling `on` (the status, a `[from, to]` range, or
   `"default"`), `kind`, and the decoder.

All of these ship inside `node_modules/{package-name}/`, so read them there rather than the compiled
`dist/`.

- **Case A — typed arms.** The spec declared failure bodies, so the generator emitted a subclass named
  `{Operation}Error`, exported from the **enclosing class's merged namespace** — you catch
  `{Resource}.{Operation}Error`, or `{Api}Client.{Operation}Error` for an operation the spec left
  untagged. It redeclares `payload` with the operation's own arms. Narrow on `err.payload.kind`.
- **Case B — no typed arms.** `E` is the **base `ApiError`**, its payload is always the
  `"undeclared"` arm, and there is no subclass to catch.

Guessing wrong is *sometimes* a compile error and sometimes not, and the direction that looks safe is
the dangerous one. A subclass that does not exist fails to compile — that guess TypeScript catches. But
naming a **neighbouring** operation's error class compiles cleanly, because it is a real type, and then
never matches at runtime: the rejection sails past your `catch` and surfaces somewhere else, or not at
all. Take the case from the map every time; the compiler is not a check on this.

### Case A — reading the typed payload

> **This section applies only where the operation declares typed arms.** An operation whose **Error**
> bullet names the base `ApiError` has nothing to narrow — its payload is always `"undeclared"`.
> Skip to **Case B**.

`err.payload` is a discriminated union with **one arm per failure response the spec declared**, plus
`"undeclared"`. Two things about arm names catch people out:

- **The name comes from the body's schema, not from the status.** An arm whose body is a direct model
  reference is named after that model in lower camel (`validationError`); anything else — a
  primitive, an array, a map, or no content — is named `error{Status}` (`error400`, `error4XX`,
  `errorDefault`). So two statuses that return the *same* model give you two arms whose names differ
  only by a numeric suffix (`validationError`, `validationError2`). Read the arm names off the map;
  do not derive them from the status.
- **One arm can still cover many statuses** — not because two statuses were merged, but because the
  spec declared a *range* or a `default:`. A `4XX` arm covers `[400, 499]`; a `default:` arm covers
  **every error status no other arm covers**, `3xx` included. Check `err.status` when you need the
  specific one.

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
  } else {
    throw err;   // every other failure, for the rest of your ladder
  }
}
```

**`"undeclared"` is always an arm, and it is not a catch-all.** It carries
`{ kind: "undeclared"; rawBody: ArrayBuffer }` and fires **only** for a status no declared arm covers
— or, where the operation declares a `default:` arm, for a body that arm could not decode. A status
that has an arm lands in that arm and leaves `"undeclared"` unreached — so a `catch` that handles only
`"undeclared"` silently drops every typed body. Handle every arm the map lists, and put `"undeclared"`
last. There is no operation whose failure is guaranteed typed: the generator emits the `"undeclared"`
arm unconditionally, so any operation can hand you raw bytes for a status it does not document.

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

### Case B — the base `ApiError`

Nothing to narrow — and the obvious test narrows **nothing**. On the base `ApiError` the payload's
`kind` is typed `string`, so `err.payload.kind === "undeclared"` leaves `payload` unnarrowed and
`rawBody` unreachable. Test for the member instead:

```ts
import { ApiError } from "{package-name}";

try {
  await client.{resource}.{operation}({ /* ... */ });
} catch (err) {
  if (err instanceof ApiError) {
    console.error(err.status, err.headers.get("x-request-id"));
    if ("rawBody" in err.payload) {
      console.error(new TextDecoder().decode(err.payload.rawBody));
    }
  } else {
    throw err;
  }
}
```

`rawBody` is bytes, not text, and a Case B body may not be JSON at all — a gateway or proxy can answer
with HTML or plain text. Decode it to a string before you try to parse it, and expect the parse to fail.

### Matcher precedence

For a subclass with several arms, the runtime matches in **three passes**: an exact numeric status
across the whole table first, then the first covering range, and last a `"default"` arm where the
spec declared one. So a specific `404` arm beats a `4XX` arm regardless of declaration order, and a
`default:` arm can never shadow a narrower one.

A body that does not fit the arm it matched is a **`DecodeError`** — except on `"default"`, which
describes no status in particular and so **degrades to the `"undeclared"` arm**, raw bytes and all,
rather than throwing.

### Catch order

`instanceof` narrows from most specific to least, and every generated subclass extends `ApiError`,
which is itself in the family — so the subclass test must come first or it is unreachable:

```ts
try {
  await client.{resource}.{operation}({ /* ... */ });
} catch (err) {
  if (err instanceof {Resource}.{Operation}Error) {
    // typed arms available on err.payload.kind
  } else if (err instanceof ApiError) {
    // any other operation's error status — payload is "undeclared"
  } else if (err instanceof {Api}Error) {
    // every other kind: decode, encode, connection, timeout, auth
  } else {
    throw err;
  }
}
```

## `"decode"` — the answer did not fit

A `DecodeError` means the API **did** answer — it carries `status` and `headers` — but the body could
not be turned into the declared value. `cause` says how: a `SchemaError` when the body did not fit its
contract, a `SyntaxError` when it was not JSON, or the platform's read fault when the body died
mid-stream after the response line. A body arriving where the operation declares none has no `cause`.

Which status it came on matters a lot, and `err.status` tells you:

- **On a success status** — the API answered `2xx` and the SDK could not decode the body. The outcome
  is genuinely **unknown**: the call may have taken effect.
- **On a declared error arm** — the API rejected the request and only the *detail* was lost. The
  status survives on the `DecodeError`, so you still know it was, say, a `422`.

Mapping both onto one 5xx is wrong half the time — it tells a retrying caller to keep retrying
something that can never succeed. Only a **declared** arm can decode-fail: the `"undeclared"` arm reads
raw bytes and never decodes, and a `default:` arm degrades instead of throwing.

```ts
if (err instanceof DecodeError) {
  console.error(err.status, err.message);   // the call, and that the body did not decode
  console.error(err.cause);                  // the SchemaError naming the failing field, or the parse fault
}
```

## `"encode"` — nothing was sent

An `EncodeError` means a request field failed encoding, so **no request reached the network**. This is
a bug in your code (a wrong type, a bad date format), not an API failure. Never retry it, and do not
let a production ladder quietly absorb it — it should fail loudly in development. Its `cause` is the
`SchemaError` that rejected the value, and that error's `message` names the field.

## `"auth"` — a credential could not be obtained

**`AuthError` is about obtaining a credential, not about being refused one.** A 401 *from the API* is
an `ApiError` like any other status, so one `catch` arm cannot absorb the other.

A 401 does have one auth consequence: it **invalidates whatever that operation's scheme had cached**,
so the **next** call re-acquires. `401` is not in the default `statusCodesToRetry`, so the current
request fails and recovery happens on the following call. To have the current call re-sent with a
fresh token instead, add `401` to `statusCodesToRetry`: every attempt resolves its credential again, so
the retry carries the re-acquired token. A static key is re-sent unchanged, so that only helps a scheme
that fetches its credential.

`AuthError` means the token grant failed, every configured branch of an alternatives requirement
failed, PKCE was disabled without a client secret, or your own authorization-code prompt rejected. Its
`method` and `uri` name **the operation you called**, not the token endpoint. When the grant failed,
**`.cause` is the token endpoint's own `ApiError`** — that is where the token endpoint's status and
body are, and the only place a "bad client credentials" diagnosis can be read. Never log an `AuthError`
without its `cause`.

An **alternatives** requirement falls through: a configured scheme that throws is not the end of it,
the next configured one is tried, and only when all of them have failed does it throw. When exactly
one was configured, its failure surfaces as it would from that scheme alone — a refused token endpoint
is still an `AuthError` with the endpoint's `ApiError` on `.cause`, never the bare `ApiError`.
Otherwise it is an `AuthError` whose `cause` is an `AggregateError` holding what each branch threw, in
the order tried. An abort or a timeout escapes immediately rather than being collected.

Auth resolves *before* the request is sent, so an `AuthError` means **nothing was sent** — it is an
auth fault, not a rejection. Check it early in your ladder.

⚠ **The token is acquired lazily, on first use — so an auth misconfiguration surfaces from an
operation call, not from client construction.** The rejection points at whichever operation happened to
run first, which reads like a problem with that operation rather than with the credentials you wired
up. It also rejects in `.asApiResult()` mode, for the same reason: the grant happens before a request
exists to return a result for.

## A missing field is not an error — it is `undefined`

This is the gap the error types leave, and the one most likely to reach production. A model member the
description did not mark **required** is emitted as `member?: T` over an optional schema entry, so a
response that simply **omits** it validates cleanly. No `DecodeError` is thrown, and nothing warns you:

```ts
const value = await client.{resource}.{operation}({ /* ... */ });  // 200, truncated body
value.{member};   // undefined — not an error, and not a null you declared
```

A `DecodeError` on a success status means a **type** mismatch or an unparseable body, not an absent
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

`.asApiResult()` turns the **HTTP error status** into a value. It does **not** make the call
non-throwing: every other failure still rejects.

```ts
try {
  const outcome = await client.{resource}.{operation}({ /* ... */ }).asApiResult();

  if (outcome.ok) {
    use(outcome.value);
  } else {
    // outcome.status, outcome.headers, outcome.message, outcome.method, outcome.uri, outcome.payload
  }
} catch (err) {
  // still needed — decode, encode, connection, timeout, auth and a caller abort land here
}
```

The split is mechanical: **`200`–`299` is `ok: true`, every other status is `ok: false`.** No nuance,
no per-status judgement. Reach for it when an error status is an expected outcome (a `404` meaning "not
found yet", a `409` meaning "already exists") and you would otherwise be using exceptions for control
flow, or when you need `status` and `headers` on the *success* path.

Two mechanics to know: the failure branch is a plain object carrying **the error's own members under
their own names** — `status`, `headers`, `message`, `method`, `uri` and `payload` — never the error
instance, so you narrow on `outcome.payload.kind` exactly as you would on `err.payload.kind`, and a
handler moves between the two forms by swapping the prefix; and `.asApiResult()` must be called on the
value the operation returned, **before any `.then()`**, because `ApiPromise` overrides
`Symbol.species` and the method is gone from what `.then()` hands back (see
**typescript-calling-endpoints**).

⚠ **This mode is not rejection-free, and the cases it does not convert are the ones people assume it
does.** A decode failure is not an API error status, so it propagates in both modes rather than
becoming an `ok: false` value — a `DecodeError` on a `2xx` body, and a `DecodeError` on a **declared
error arm**, both still reject. So does a failed token acquisition, because the credential is resolved
before anything is sent, and so does a caller abort. `try`/`catch` is still required around
`.asApiResult()`; it narrows what you catch, it does not remove the need to catch.

## Transport failures, and guarding every call site

`"api"` covers only the case where the API answered. It does **not** cover a host that is unreachable,
DNS that failed, a connection that dropped, or an attempt's timeout elapsing — those are
`"connection"` and `"timeout"`, and a `catch` whose only arm is `err instanceof ApiError` lets them
escape and take down whatever was running the call.

**Every one of them reaches you after the retries are spent.** On a `GET`, `HEAD`, `PUT` or `OPTIONS`
call the default policy re-sends a `408`, `429`, `500`, `502`, `503` or `504`, a connection failure
and a timeout up to
three times before the call rejects, so what you catch is the **last** attempt's failure — an
`ApiError` for the final status, or a `ConnectionError` or `TimeoutError` — in exactly the shape it
would have had with retrying off. A write outside `httpMethodsToRetry` rejects on its first failure.
Do not retry a family error the SDK already retried; see **typescript-configuration-resilience**.

**Unlike SDKs that let their HTTP library's exceptions through, this one wraps them.** Whatever your
`fetch` rejects with becomes a `ConnectionError`, with the original on `.cause` — so your boundary
never imports the transport's exception types, and it does not need revisiting when you swap `fetch`
for a wrapper. Two things pass through unwrapped: anything that is already in the family (a
`{Api}Error` your own wrapper threw), and a cancellation — the caller's own abort `reason`, or the
SDK's `TimeoutError` when an attempt's timeout fired. If you wrap `fetch` to add logging or a guard
(**typescript-configuration-resilience**), throw a family error from it or accept that yours will
arrive as `err.cause` — and know that a plain error thrown there is a `ConnectionError` the retry loop
retries.

**Convert the family to your own error type in one place.** If you wrap the SDK behind your own
abstraction (a client interface, a service, a repository), do the conversion at that boundary so the
rest of the code has one failure type to handle:

```ts
class MyUpstreamError extends Error { status: number; reason: string | undefined; constructor(status: number, reason: string | undefined, opts?: ErrorOptions) { super(reason, opts); this.status = status; this.reason = reason; } }

function translate(err: unknown): never {
  // Most specific first — the typed subclass, then any other error status.
  if (err instanceof {Resource}.{Operation}Error && err.payload.kind === "{arm}") {
    throw new MyUpstreamError(err.status, err.payload.body?.{reasonField}, { cause: err });   // one branch per arm the map lists; join a list of reasons
  }
  if (err instanceof {Api}Error) {
    switch (err.kind) {
      case "api": {
        if (err.status === 429) throw new MyRateLimitedError(err.headers.get("retry-after"), { cause: err });
        // Every arm without its own branch lands here — raw bytes, or a declared arm's body. `reasonIn` is YOUR
        // helper: parse, take the reason field, join a list, cap the length; nothing usable (an HTML page) → undefined.
        const reason = reasonIn("rawBody" in err.payload ? err.payload.rawBody : (err.payload as { body?: unknown }).body);
        throw new MyUpstreamError(err.status, reason, { cause: err });
      }
      case "timeout":
      case "connection":
        // Nothing was learned about the request's fate. For a write, that is "unknown", not "failed" —
        // the bytes may have reached the API before the failure. Tell the caller that, don't say it failed.
        throw new MyTransientError({ cause: err });
      case "decode":
        // The API answered and the body was unreadable — err.status says whether it was a success.
        throw new MyProviderUnreadable(err.status, { cause: err });
      case "encode":
      case "auth":
        throw new MyIntegrationDefect(err.message, { cause: err });
    }
  }
  throw err;   // an abort's reason, a configuration fault, or a bug
}
```

Always pass `{ cause: err }` — the SDK's own errors chain their underlying failure that way (an
`AuthError` hides the token endpoint's `ApiError` there, a `DecodeError` or `EncodeError` the
`SchemaError` naming the field), and dropping the link is what makes production diagnosis hard.

**Guard every call site, not just the ones that change data.** It is easy to wrap the calls that create
or modify something and overlook the calls that only read — especially reads on a routine path (loading
a screen, a scheduled job, a startup or health check). A connection failure during a read fails just as
hard as one during a write. A call left unguarded next to one that is guarded is the one that breaks.

⚠ **A rejection you never await is an unhandled rejection**, exactly like any other promise's:
`unhandledRejection` on Node — which by default ends the process — and `unhandledrejection` in a
browser. Await every call, or attach your own handler. `.asApiResult()` marks the promise handled as
its first act, so call it on the value the operation returned, in the same turn.

## Presenting failures at your boundary — coherent, distinct, leak-free

The catches above decide what you catch; this decides what the caller (an HTTP response, a UI layer,
another service) sees. Get it wrong and every failure looks the same, or an internal diagnostic ends up
on the wire. Three rules, applied at the one boundary where SDK failures become your own error type:

**Handle each failure kind the same way everywhere.** One mapping from failure kind → outcome, applied
identically at every call site — same order, same conversion. When the same kind of failure becomes a
different result on a different operation, callers cannot reason about it.

**Keep distinct failures distinct.** An `ApiError` always hands you `status`, so that is your
discriminator — and where the operation declares arms, `payload.kind` says more than the status does,
because it names the *body* the API sent rather than the class of failure. Carry whichever you keyed on
into your own error type; a status dropped at this boundary cannot be recovered downstream. Collapsing
everything into one blanket status (502 for all of it) throws away the only signal that separates "you
sent something invalid" from "the provider is down".

One ladder, in the single place where your error type becomes a caller-facing status. This is where the
discriminator you carried gets read back — a ladder with **no branch reading it** is incomplete:

```ts
function toHttp(err: unknown): { status: number; message: string } {
  // OUR quota is spent — the caller did nothing wrong and cannot fix it.
  if (err instanceof MyRateLimitedError) return { status: 503, message: "Temporarily unavailable." };

  if (err instanceof MyUpstreamError) {
    // OUR credentials — likewise not the caller's to fix.
    if (err.status === 401 || err.status === 403) return { status: 502, message: "Provider unavailable." };
    // The provider rejected THE CALLER'S request — hand back the same status and its reason.
    if (err.status >= 400 && err.status < 500) return { status: err.status, message: err.reason ?? "Request rejected." };
    return { status: 502, message: "Provider error." };
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

**An unreadable body is not one case but two — decide which before you map it.** A `DecodeError` on a
**success** status is genuinely unknown: 5xx. One on an **error** status is not — the provider rejected
the request and only the *detail* was lost, so answering 5xx tells a retrying caller to keep retrying
something that can never succeed. `err.status` is what separates them; the type alone does not.

**Never map a decode failure onto a domain absence.** "I could not read the answer" is not "the
provider said no." It is tempting on a lookup — an unreadable body and a genuine miss both leave you
without a record — but only one of them is a *fact*. Where a lookup gates a create, that conversion
turns a corrupt response into a spurious create; more generally it produces a confident wrong answer,
which is worse than an error. If the operation's miss really is signalled by an empty body, match on
*empty*, not on *unparseable*.

**Never put an SDK `message` on the wire.** It names the call — the method and the URL your service
dialled, path parameters included — and that is a diagnostic for your logs, not copy for your caller.
Log the SDK error with its `cause`; return a message you wrote — or, for a `4xx` the caller caused, the
API's own reason from `err.payload`.

## `instanceof` across the ESM/CJS boundary

`instanceof` is reliable **within one dialect**. A process that loads both — `import` in one file,
`require` in another — gets **two independent copies** of every error class, and `instanceof` across
that boundary is `false`. It fails silently: a `catch` arm simply never matches.

If your process might do that, narrow on a value instead — every member of the family carries `kind`:

```ts
// The family, dialect-safe:
if (typeof err === "object" && err !== null && "kind" in err && "uri" in err) { /* err.kind */ }
```

`err.name` is also stable across copies (each class sets it from its own constructor name).

## Notes

- **Retries are on by default.** An idempotent call is retried on `408`, `429`, `500`, `502`, `503`,
  `504`, a dropped
  connection and a timeout, honouring `Retry-After`, before it rejects; a write is not, unless its
  method is in `httpMethodsToRetry`. The error you catch is the last attempt's. See
  **typescript-configuration-resilience**.
- **A single `401` is not a permanent credential failure.** It invalidates the cached token and, by
  default, is not re-sent; the caller sees that one `401`, and the *next* call acquires afresh. Do not tear down a
  client or alert on one.
- **No error logging.** `src/core/` contains no `console` call. Log in your `catch`, or in a wrapping
  `fetch`.
- **No raw `Response`.** `status` and `headers` are on `ApiResult` and on a `ResponseError`; the
  `fetch` `Response` is deliberately unreachable.
- **A missing credential is not an error.** An unset credential member sends no credential, so the
  failure surfaces as an `ApiError` `401` from the API rather than anything at construction — which
  reads like an expired token instead of a config bug. This holds for composite schemes too: a
  partially configured `all`/`any` scheme sends what it has rather than refusing, so there is no local
  "auth could not be satisfied" rejection to catch. See **typescript-client-initialization**.
- **SDK errors do not survive a worker or process boundary intact.** `structuredClone` and
  `postMessage` reduce an `Error` subclass to a plain `Error` — `name`, `message` and `cause` survive;
  `kind`, `method`, `uri`, `status` and `payload` do not. Convert to your own serializable shape
  *before* you post it, not after.

## Next

- Timeouts, cancellation, the retry policy → **typescript-configuration-resilience**
- Asserting error paths in tests → **typescript-testing**
- Which arms an operation declares → `map/operations/{resource}.md`, the **Error arms** bullet
