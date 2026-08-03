---
name: go-calling-endpoints
description: Call API operations on an APIMatic-generated Go SDK — get a controller from the client, the ctx-first signature convention, passing parameters either as positional arguments (required = value, optional = *T pointer) or bundled into an {Operation}Input struct, form/body params, and reading the models.ApiResponse[T] return (.Data and .Response). Use whenever invoking an endpoint, building a request, working out which params are required vs optional, or consuming a response from any APIMatic Go SDK — load it even after reading the signature in the source, since it doesn't warn you about the two parameter-passing styles or that the return is a wrapper, not the bare value.
---

# Calling endpoints on an APIMatic Go SDK

Operations are **synchronous, blocking methods** on a **controller** you get from the client. Get the
controller from its accessor, then call the operation:

```go
ctrl := client.{Resource}Api()
apiResponse, err := ctrl.{Operation}(ctx, ...)
```

Open `client.go` for the controller accessors, then the relevant `*_controller.go` for the operation's
exact signature.

> Throughout, `{...}` tokens are placeholders for names you take from your SDK — replace them with the
> concrete identifiers from the source. The generated `doc/controllers/*.md` files list every operation
> with its signature and a usage snippet.

## Method signature convention

```go
func (c *{Resource}Api) {Operation}(
    ctx context.Context,
    // parameters — see the two styles below
) (models.ApiResponse[{T}], error)
```

- **`context.Context` is always first.** Pass it from your caller; use `context.Background()` only in
  `main` or tests. The context controls cancellation and deadline (see **go-configuration-resilience**).
- **Return is always `(models.ApiResponse[{T}], error)`** — a wrapper, never the bare value. `{T}` is the
  response data type (a model, a primitive like `string`/`float64`, a slice, or `[]byte` for raw/binary).
- On a non-2xx response (or a transport failure) `err` is non-nil — see **go-error-handling**.

## Two parameter-passing styles — check the signature

APIMatic Go generates one of two shapes per operation; **read the signature, don't assume**:

**1. Positional parameters** — required params are value types; optional params are pointers `*T`
(pass `nil` to omit). Form bodies arrive as `formParams map[string]any`:

```go
// func (o *OAuthAuthorizationController) RequestToken(
//     ctx context.Context, authorization string, scope *string, formParams map[string]any,
// ) (models.ApiResponse[models.OAuthToken], error)

scope := "read"
resp, err := client.OAuthAuthorizationController().RequestToken(
    ctx,
    "Basic " + token,   // required
    &scope,             // optional *string — nil to omit
    map[string]any{},   // form params
)
```

**2. An `{Operation}Input` struct** — when an operation has several parameters they are bundled into a
single input struct passed as the second argument (required fields are value types; optional fields are
`*T`):

```go
// type GetCalculateInput struct { Operation models.OperationTypeEnum; X float64; Y float64 }
// func (s *SimpleCalculatorController) GetCalculate(ctx, input GetCalculateInput) (models.ApiResponse[float64], error)

resp, err := client.SimpleCalculatorController().GetCalculate(ctx, apimaticcalculator.GetCalculateInput{
    Operation: models.OperationTypeEnum_SUM,
    X:         2,
    Y:         3,
})
```

Never guess which params are optional or how they're grouped — open the method (and any `{Operation}Input`
struct) in the controller file. For request **bodies** that are models, see **go-models**.

## Enums as parameters

Enum-typed params/fields take the generated typed constant from the `models` package (e.g.
`models.OperationTypeEnum_SUM`). For a value not known at compile time, convert a raw value
(`models.OperationTypeEnum("sum")`). See **go-models** for enum representation.

## Reading the response

`models.ApiResponse[T]` has two fields:

| Field | Type | Use |
| --- | --- | --- |
| `Data` | `T` | the deserialized response body |
| `Response` | `*http.Response` | status code, headers, raw body |

```go
apiResponse, err := client.{Resource}Api().{Operation}(ctx, ...)
if err != nil {
    // see go-error-handling
    return err
}
fmt.Println(apiResponse.Data)                  // the typed result
fmt.Println(apiResponse.Response.StatusCode)   // e.g. 200
```

`Data` is whatever `{T}` is for the operation: unwrap a wrapper struct's field, iterate a slice
(`[]models.{Item}`), use a primitive directly, etc. Read the operation's return type in the source to
know its shape.

## Finding the right method in the SDK source

- Controller accessors are on the `ClientInterface` in `client.go`; each returns a `*{Resource}Api`.
- Search `func (c *{Resource}Api) {Operation}` (or grep `doc/controllers/*.md`) for the method.
- Request/response/enum types live under `models/`; typed errors under `errors/`.
- The method's doc comment states what it does, its parameters, and (via `AppendErrors`) the error types.

## Next

- Build request models, enums, unions → **go-models**
- Errors and status codes → **go-error-handling**
- Pagination, retries, timeouts, transport → **go-configuration-resilience**
