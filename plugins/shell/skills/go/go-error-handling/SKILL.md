---
name: go-error-handling
description: Handle errors from an APIMatic-generated Go SDK — every call returns (models.ApiResponse[T], error); on a non-2xx the error is an https.ApiError value (from go-core-runtime) carrying StatusCode, Headers, Body []byte, and Message, or a per-operation typed error struct (in the SDK's errors package) that embeds https.ApiError and adds payload fields; transport/context failures are distinct. Use the moment you check an error return, need the HTTP status code or body, or want to distinguish an API error from a network failure — load it even after reading the type in the source, since it won't tell you the base error is a value (not pointer), that typed errors are pointers, or that the SDK's errors package name collides with the stdlib.
---

# Error handling for an APIMatic Go SDK

Every operation returns `(models.ApiResponse[T], error)`. On a **non-2xx response** the `error` is
non-nil and carries an API error from the shared runtime; on a **transport/context failure** it is a
normal Go error (e.g. `*url.Error`, `context.DeadlineExceeded`). A `nil` error means success.

> `{...}` tokens are placeholders for names from your SDK. The SDK's own typed-error package is literally
> named `errors`, which **collides with the stdlib `errors`** — alias it (e.g. `sdkerrors`) when you need
> both.

## The base error: `https.ApiError`

API errors are values of `https.ApiError` from `github.com/apimatic/go-core-runtime/https`:

```go
type ApiError struct {
    Request    http.Request
    StatusCode int
    Headers    http.Header
    Body       []byte    // raw response body
    Message    string
}
func (a ApiError) Error() string
```

Note it is returned **by value** (`https.ApiError`), not a pointer. Read it with `errors.As` targeting a
**value** variable:

```go
import (
    "errors"
    "github.com/apimatic/go-core-runtime/https"
)

apiResponse, err := client.{Resource}Controller().{Operation}(ctx, ...)
if err != nil {
    var apiErr https.ApiError
    if errors.As(err, &apiErr) {
        fmt.Println(apiErr.StatusCode)          // e.g. 404
        fmt.Println(string(apiErr.Body))        // raw body
        fmt.Println(apiErr.Headers.Get("X-Request-Id"))
    } else {
        // transport / context error — see below
        fmt.Println("transport error:", err)
    }
    return err
}
// use apiResponse.Data
```

Use `errors.As` (not a direct type assertion) so it works even if the error is wrapped.

## Per-operation typed errors

For status codes the API documents, a controller method registers a typed error via `AppendErrors`, e.g.:

```go
req.AppendErrors(map[string]https.ErrorBuilder[error]{
    "400": {Message: "...", Unmarshaller: errors.NewOAuthProvider},
    "401": {Message: "...", Unmarshaller: errors.NewOAuthProvider},
})
```

These typed errors live in the SDK's `errors/` package, **embed `https.ApiError`**, add fields parsed from
the error payload, and are returned **as pointers**:

```go
// type OAuthProvider struct { https.ApiError; MError models.OAuthProviderErrorEnum `json:"error"`; ... }

import sdkerrors "github.com/context-plugins/shell-api-go/errors"

var provErr *sdkerrors.OAuthProvider
if errors.As(err, &provErr) {
    fmt.Println(provErr.StatusCode)   // promoted from embedded https.ApiError
    fmt.Println(provErr.MError)       // typed payload field
} else {
    var apiErr https.ApiError         // fall back to the base error
    if errors.As(err, &apiErr) { fmt.Println(apiErr.StatusCode) }
}
```

**Check the specific typed error first, then fall back to `https.ApiError`.** To know which (if any) typed
errors an operation has, read its `AppendErrors` map in the controller, or open `errors/`. A status with
no registered builder, or the default `"0"` entry, comes back as the base `https.ApiError`.

## Transport, context, and decode errors

These are **not** `https.ApiError` (`errors.As(err, &apiErr)` returns `false`):

```go
if errors.Is(err, context.DeadlineExceeded) {
    // request (incl. retries) exceeded the deadline
} else if errors.Is(err, context.Canceled) {
    // caller cancelled the context
} else {
    var urlErr *url.Error
    if errors.As(err, &urlErr) {
        // dial/TLS/connection failure
    }
}
```

A successful HTTP call whose body fails to decode also returns a non-nil `err` with a populated
`apiResponse.Response` — inspect `apiResponse.Response.StatusCode` to disambiguate.

## Notes

- Retries for transient statuses happen automatically **before** the error is returned — but retries are
  **disabled by default** and, when enabled, cover `GET`/`PUT` only. See **go-configuration-resilience**.
- `apiResponse.Response` is usually populated even on error (the runtime returns the `*http.Response`
  alongside the error), so you can read `StatusCode`/`Headers` from there too.
- Always prefer `errors.As`/`errors.Is` over bare type assertions/comparisons.
