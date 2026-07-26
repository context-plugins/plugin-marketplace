---
name: dotnet-getting-started
description: Identify and orient in an APIMatic-generated C#/.NET SDK (Hotel Search API) — its root namespace and namespace layout, the client and its options, environments and the auth pattern, how to install it from its GitHub repo, and how to clone and navigate the source for reference. Use when installing, setting up, or first working with the SDK in a C#/.NET project. It also routes you to the companion dotnet-* skills (client-initialization, authentication, calling-endpoints, models, error-handling, configuration-resilience, testing) and gates loading each at its step — load them even after you've read the SDK source, since the source shows signatures but not the usage gotchas these skills carry.
---

# Getting started with the Hotel Search API .NET SDK

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated
.NET SDK (client setup, auth, calling endpoints, models, error handling, retries, testing), see the
companion API-agnostic skills: `dotnet-client-initialization`, `dotnet-authentication`,
`dotnet-calling-endpoints`, `dotnet-models`, `dotnet-error-handling`, `dotnet-configuration-resilience`,
`dotnet-testing`.

**The source and these companion skills are complementary — load both.** The cloned source is authoritative
for the SDK's *surface* (signatures, model shapes, enums, which error type an operation throws); the companion
skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature
can't show. Reading the source doesn't remove the need to load the skill for that step, so at each step below,
load the companion *and* confirm names against the source.

> **Before writing any integration code, clone the SDK source** (see the *SDK source* section below) and
> read it to confirm every signature, model, enum, and error type as you go. Do **not** decompile or reflect
> over the installed package, and do **not** fetch GitHub files ad hoc — clone once, then grep the local copy.

## SDK identity

| | |
| --- | --- |
| API | `Hotel Search API` |
| Project | `HotelSearchApi.csproj` at the repo root — referenced from the cloned source (see **Install**) |
| Root namespace | `HotelSearchApi` (the `using` namespace) |
| Client class | `HotelSearchApiClient` |
| Options class | `HotelSearchApiClientOptions` |
| Auth | per-API scheme(s) — see **dotnet-authentication** |
| Environments | `ServerEnvironment` values are per-API — see the source and **dotnet-client-initialization** |
| Target framework | typically `netstandard2.0` — confirm in the `.csproj` |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (namespace,
client/options, the auth *pattern*, the environments), while the actual integration code comes from the
companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its
types against the cloned source.

## Namespaces (using-directives)

The SDK splits its public types across **separate child namespaces**. C# does **not** import child
namespaces transitively, so `using HotelSearchApi.Models;` alone does **not** make enums, union types, or
error types visible — you get `CS0103`/`CS0246` ("name/type does not exist") on build. Add a separate `using`
for each kind of type you reference — when a name won't resolve, open its file in the cloned source and copy
the `namespace` declaration at its top.

## Install

```bash
# Clone the SDK and add a project reference to its .csproj:
git clone --branch main https://github.com/context-plugins/hotel-search-api-csharp
dotnet add reference hotel-search-api-csharp/HotelSearchApi.csproj
```

```csharp
using HotelSearchApi;          // client + options + ServerEnvironment
using HotelSearchApi.Models;   // request/response types, enums, unions
```

> Add a separate `using` for each child namespace you reference (see **Namespaces** above). Runtime
> dependencies are pulled in transitively — confirm the pinned versions in the `.csproj`.

## SDK source — clone it first; don't fetch files ad hoc

You will constantly need to confirm real method signatures, model shapes, enums, and error types, and the
**only reliable way** is to read the SDK source. Clone it once, up front — before writing integration code —
into your **system temp directory** (outside your project), then read and grep the local copy:

```bash
# Linux / macOS:
git clone --depth 1 --branch main https://github.com/context-plugins/hotel-search-api-csharp /tmp/hotel-search-api-dotnet-src
```

```powershell
# Windows (PowerShell):
git clone --depth 1 --branch main https://github.com/context-plugins/hotel-search-api-csharp "$env:TEMP\hotel-search-api-dotnet-src"
```

Then confirm the SDK shape **only** from that local clone:

- **Don't decompile or run reflection over the installed package** — a compiled assembly drops what the source
  carries and the other skills rely on: the XML `<exception>`/parameter doc-comments, the exact parameter
  names and order, and each method's internal request-builder details.
- **Don't fetch GitHub files one at a time** — `…/blob/…` pages return HTML and guessed paths fail. Clone once
  and read locally. Only if `git` is unavailable, fetch a **raw** URL of the form
  `https://raw.githubusercontent.com/{owner}/{repo}/{branch}/…` (never a `…/blob/…` page).

Layout — grep the clone here first:

- `Api/` (a file per controller/group) — **operation methods and their signatures live here** (each carries
  XML-doc comments for the params, the endpoint, and the thrown error type).
- `Models/` (+ enum, `AnyOf`/`OneOf` union types) — request/response types, enums, unions. **Field names,
  optionality, and enum values live here.**
- the error types — the base SDK exception (`SdkException<T>`) plus per-operation `{Operation}Error` and the
  fallback `RawError`.
- `Core/` — HTTP infrastructure (`SdkException<T>`, `RawError`, `ApiResult<T>`, auth, retries).
- `HotelSearchApiClient.cs`, the `ServerEnvironment` values, and the DI registration (`ServiceCollectionExtensions`).
- a generated reference index (`api-reference.md`, or `README.md` / `doc/`) — every endpoint with its
  signature, the thrown `SdkException<{Operation}Error>`, and a usage snippet. **Grep it first** to find an
  operation fast, then open the source file for the exact signature.

Clean up when done:

```bash
rm -rf /tmp/hotel-search-api-dotnet-src                               # Linux / macOS
```
```powershell
Remove-Item -Recurse -Force "$env:TEMP\hotel-search-api-dotnet-src"   # Windows
```

## Integration workflow — load the companion skill at each step

Before you write the code for each step, load the named companion skill — even if you've already read the
relevant source. Each step calls out the trap the signature hides (in *parens*). A typical integration reaches
them in this order:

1. **Client & DI setup** — load **dotnet-client-initialization** before you construct `HotelSearchApiClient`, build its
   `HotelSearchApiClientOptions`, or DI-register it. (*The signature won't tell you:* the `HttpClient` and client must
   be long-lived and reused, not created per request.)
2. **Authentication** — load **dotnet-authentication** before you set credentials. (*The signature won't tell
   you:* set credentials in the options before constructing the client (or in the DI callback), and load
   secrets from configuration rather than hardcoding.)
3. **Calling an endpoint** — load **dotnet-calling-endpoints** before the first `client.{ApiGroup}.{Operation}(...)`
   call. (*The signature won't tell you:* call list/search ops with named arguments — many optional params
   have no C# default and mis-bind in a positional call.)
4. **Models** — load **dotnet-models** the moment a request/response field isn't a plain string or number.
   (*The signature won't tell you:* unions are built with factory methods and read via `TryGet…` (no `new`),
   enums are `StringEnum<T>` not C# enums, and unmodeled JSON fields are dropped on deserialize.)
5. **Error handling** — load **dotnet-error-handling** before you write any `try/catch`. (*The signature won't
   tell you:* list/find/delete ops throw `SdkException<RawError>` with no typed accessors, and `TryGetRawError`
   is not a catch-all on the typed `{Operation}Error`s.)
6. **Configuration & resilience** — load **dotnet-configuration-resilience** when you tune retries, timeouts,
   the base URL, pagination, or logging. (*The signature won't tell you:* retries cover idempotent verbs only —
   `POST`/`DELETE` aren't retried — and `Timeout` is per-attempt, not total.)
7. **Testing** — load **dotnet-testing** before you stub the SDK. (*The signature won't tell you:* the
   `HttpClient` constructor argument is the test seam; match the project's existing framework and assertion
   style.)
