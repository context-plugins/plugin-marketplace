---
name: dotnet-calling-endpoints
description: Call API operations on an APIMatic-generated C#/.NET SDK (APIMATIC v3.0) — get a controller from a client property, prefer the ...Async overload with an optional CancellationToken, pass parameters either as positional arguments or bundled into a {Operation}Input struct, build request-body models with object initializers, and read the bare Task<T> return value (or Task<ApiResponse<T>> when the SDK is configured that way). Use the moment you invoke any endpoint, build a request, work out which params are required vs optional, or read a response — load it even after reading the controller method signature in the source, since it won't tell you about the two parameter styles, that the sync overload is a blocking wrapper that can deadlock, or how to find which exception the operation throws.
---

# Calling endpoints on an APIMatic C#/.NET SDK

Operations are `async` methods on a **controller** you get from a **property** on the client. Get
the controller property, then call the operation:

```csharp
{Resource}Controller ctrl = client.{Resource}Controller;
{T} result = await ctrl.{Operation}Async(/* params */);
```

Open `AIceptionInteractiveClient.cs` for the full list of controller properties; open `Controllers/{Resource}Controller.cs`
(or grep `doc/controllers/*.md`) for every operation's signature.

> Throughout, `{...}` tokens are placeholders for names you take from your SDK — replace them with the
> concrete identifiers from the generated source.

## Async vs sync overloads

Every operation is generated in two forms:

```csharp
// Async (preferred) — takes an optional CancellationToken
public async Task<{T}> {Operation}Async(/* params */, CancellationToken cancellationToken = default)

// Sync — blocking wrapper: CoreHelper.RunTask({Operation}Async()); avoid in async/ASP.NET contexts
public {T} {Operation}(/* params */)
```

Always prefer the `…Async` overload. The sync overload calls `CoreHelper.RunTask(...)` and can
deadlock in ASP.NET contexts. Pass a `CancellationToken` from your caller when you need cancellation;
the default is `CancellationToken.None`.

## Two parameter styles — read the signature, don't assume

APIMatic .NET generates one of two parameter shapes per operation:

**1. Flat positional parameters** — a list of typed arguments directly on the method. Optional
parameters have a default value or are nullable:

```csharp
// Example: no extra params beyond CancellationToken
public async Task<string> CustomAuthenticationAsync(CancellationToken cancellationToken = default)

// Example: positional body + CancellationToken
public async Task<Models.User> CreateUserAsync(Models.CreateUserRequest body,
    CancellationToken cancellationToken = default)
```

**2. A single `{Operation}Input` struct** — when an operation has several parameters they are bundled
into a named input struct. Build it with an object initializer and pass it as the only non-CancellationToken
argument:

```csharp
// Generated: GetCalculateInput holds all params; GetCalculateAsync(GetCalculateInput input)
GetCalculateInput input = new GetCalculateInput
{
    Operation = OperationTypeEnum.MULTIPLY,   // required enum field
    X = 222.14,                               // required double
    Y = 165.14,                               // required double
};

double result = await client.SimpleCalculatorController.GetCalculateAsync(input);
```

Open the controller method and any `{Operation}Input` struct in `Models/` to see what's required and
what's optional — do not guess. The generated `doc/models/{operation}-input.md` lists each field's
type and Required/Optional tag.

## Building request body models

Request bodies are plain C# classes (`BaseModel` subclasses) built with object-initializer syntax.
Required fields have non-nullable types; optional fields are nullable types (`string?`, `long?`) and
carry `[JsonProperty("name", NullValueHandling = NullValueHandling.Ignore)]` — a `null` value is
omitted from the serialized JSON:

```csharp
var body = new {RequestModel}
{
    RequiredField = "value",           // non-nullable — must be provided
    OptionalField = null,              // nullable — omitted from JSON when null
};

var result = await ctrl.{Operation}Async(body);
```

See **dotnet-models** for enums, oneOf/anyOf union containers, collections, and dates.

## Return type — bare T (most SDKs)

Most operations return the deserialized body directly as `Task<{T}>`:

```csharp
Models.ServiceStatus status = await ctrl.OAuthClientCredentialsGrantAsync();
double answer = await ctrl.GetCalculateAsync(input);
string text = await ctrl.CustomAuthenticationAsync();
```

The return type `{T}` varies per operation — confirm the exact type from the controller's declared
return type in the source. `{T}` may be a model class, a primitive (`string`, `double`), a
collection, or `void` (no return body).

## Return type — ApiResponse wrapper (when generated)

Some SDKs are generated to return the full HTTP wrapper `Task<ApiResponse<{T}>>`. When you see this
in the controller source, access `.Data` for the deserialized value and `.Response` for the raw
`HttpResponse` (status code, headers, body):

```csharp
// Only when the controller method returns Task<ApiResponse<T>>:
var apiResp = await ctrl.{Operation}Async(/* params */);
var data = apiResp.Data;                              // deserialized {T}
int statusCode = apiResp.Response.StatusCode;         // HTTP status code
```

Confirm from the controller's declared return type — `Task<T>` vs `Task<ApiResponse<T>>` — before
writing the call.

## Accessing response status and headers without ApiResponse

When the operation returns bare `Task<T>` (the common case), register an `HttpCallback` on the
client at construction time and read the last response from it after the call. See
**dotnet-configuration-resilience** for the `HttpCallback` hook.

## Enums as parameters

Enum-typed parameters take the generated C# `enum` value from the `Models` namespace. APIMatic
generates two kinds:

- **Integer-backed** (`[JsonConverter(typeof(NumberEnumConverter))]`): use the named constant.
  ```csharp
  SuiteCodeEnum suite = SuiteCodeEnum.Hearts;   // wire value: 1
  ```
- **String-backed** (`[JsonConverter(typeof(StringEnumConverter))]` + `[EnumMember]`): use the named
  constant; the wire value comes from `[EnumMember(Value = "...")]`.
  ```csharp
  OAuthProviderErrorEnum err = OAuthProviderErrorEnum.InvalidRequest;
  // wire value: "invalid_request"
  ```

See **dotnet-models** for full enum details.

## Error handling

Any non-2xx response throws `ApiException` from `AIceptionInteractive.Standard.Exceptions`. Wrap calls in
`try`/`catch`:

```csharp
try
{
    var result = await ctrl.{Operation}Async(/* params */);
}
catch (ApiException e)
{
    Console.WriteLine(e.ResponseCode);   // HTTP status code (int)
    Console.WriteLine(e.Message);
    // e.HttpContext.Response carries headers and raw body
}
```

Operations with documented error responses have typed subclasses (e.g. `OAuthProviderException`) in
`AIceptionInteractive.Standard.Exceptions` — catch the subclass first, then fall back to `ApiException`. See
**dotnet-error-handling**.

## Finding the right method in the SDK source

- Controller properties are on `AIceptionInteractiveClient.cs` — one property per resource group.
- Each controller class inherits `BaseController` and lives in `Controllers/`.
- Grep `doc/controllers/*.md` first — it lists every operation with its signature and a usage snippet;
  then open the `.cs` file for the exact types.
- Input struct fields (Required vs Optional) are in `doc/models/{operation}-input.md`.
- The operation's auth requirement is under its **Authentication** heading in `doc/controllers/*.md`.

## Next

- Build models, enums, union containers → **dotnet-models**
- Catch and inspect errors → **dotnet-error-handling**
- Retries, timeouts, HttpCallback, proxy → **dotnet-configuration-resilience**
