---
name: go-testing
description: Unit-test code that uses an APIMatic-generated Go SDK by injecting a fake http.RoundTripper via WithTransport on the HttpConfiguration — that transport is the test seam (no SDK mocking helpers for consumers); stub success and error responses, capture and assert the outgoing request, and assert https.ApiError / a typed error on error paths using errors.As. Use when writing, stubbing, or verifying tests for calls through an APIMatic Go SDK — load it even after reading the constructor in the source, since the seam alone won't tell you that the base URL comes from the environment (so the RoundTripper, not a base-URL override, is the seam) or how to assert the right error type.
---

# Testing code that uses an APIMatic Go SDK

The SDK builds its `*http.Client` from `HttpConfiguration`, and you can supply the transport via
`WithTransport(http.RoundTripper)`. **That `http.RoundTripper` is the test seam** — back it with a fake so
no real network calls happen. (The base URL is derived from the `Environment`, so there's no base-URL
override to point at a server; intercept at the transport instead.) The SDK ships no consumer-facing
mocking helpers — this is standard Go.

**Match the project's existing test stack.** Check the test files and `go.mod` for the assertion library
in use (`testify/require`, `testify/assert`, or stdlib `testing`) and mirror it. Samples below use
`testing` + `testify/require` for reference; substitute the real `staxfattmerchantapi` and names.

> `{...}` tokens are placeholders for names from your SDK.

## A reusable stub transport

```go
package mypackage_test

import (
    "io"
    "net/http"
    "strings"

    "github.com/context-plugins/stax-fattmerchant-api-go"   // root package staxfattmerchantapi
)

type stubTransport struct {
    statusCode  int
    body        string
    lastRequest *http.Request
}

func (s *stubTransport) RoundTrip(req *http.Request) (*http.Response, error) {
    s.lastRequest = req.Clone(req.Context())
    return &http.Response{
        StatusCode: s.statusCode,
        Body:       io.NopCloser(strings.NewReader(s.body)),
        Header:     make(http.Header),
        Request:    req,
    }, nil
}

func clientReturning(status int, body string) (staxfattmerchantapi.ClientInterface, *stubTransport) {
    stub := &stubTransport{statusCode: status, body: body}
    client := staxfattmerchantapi.NewClient(
        staxfattmerchantapi.CreateConfiguration(
            staxfattmerchantapi.WithHttpConfiguration(
                staxfattmerchantapi.CreateHttpConfiguration(staxfattmerchantapi.WithTransport(stub)),
            ),
            // auth credentials are irrelevant to a stubbed transport
        ),
    )
    return client, stub
}
```

## Test a success path

```go
func TestGetResource_Success(t *testing.T) {
    client, _ := clientReturning(http.StatusOK, `{"id":123,"name":"widget"}`)

    resp, err := client.{Resource}Controller().{Operation}(context.Background(), /* params */)
    require.NoError(t, err)
    require.Equal(t, http.StatusOK, resp.Response.StatusCode)
    require.Equal(t, 123, *resp.Data.Id)   // Data is the typed model
}
```

## Test an error path

A non-2xx returns a non-nil `error`. Assert the type with `errors.As` (see **go-error-handling**):

```go
func TestGetResource_NotFound(t *testing.T) {
    client, _ := clientReturning(http.StatusNotFound, `{"message":"not found"}`)

    _, err := client.{Resource}Controller().{Operation}(context.Background(), /* params */)
    require.Error(t, err)

    var apiErr https.ApiError                 // base error is a VALUE, not a pointer
    require.True(t, errors.As(err, &apiErr))
    require.Equal(t, http.StatusNotFound, apiErr.StatusCode)
}
```

For an operation with a registered typed error (in the SDK's `errors/` package):

```go
import sdkerrors "github.com/context-plugins/stax-fattmerchant-api-go/errors"

var opErr *sdkerrors.{Operation}Error      // typed errors are POINTERS
require.True(t, errors.As(err, &opErr))
require.Equal(t, http.StatusBadRequest, opErr.StatusCode)
```

## Assert the outgoing request

The stub captures `lastRequest`:

```go
func TestCreate_SendsCorrectRequest(t *testing.T) {
    client, stub := clientReturning(http.StatusCreated, `{"id":1}`)

    _, err := client.{Resource}Controller().{Operation}(context.Background(), /* body */)
    require.NoError(t, err)

    req := stub.lastRequest
    require.Equal(t, http.MethodPost, req.Method)
    require.Contains(t, req.URL.Path, "/expected/path")

    sent, _ := io.ReadAll(req.Body)
    require.Contains(t, string(sent), `"name"`)
}
```

## httptest.Server variant (multi-call flows)

To exercise real HTTP plumbing, run an `httptest.Server` and use a transport that redirects the SDK's
requests to it (since the base URL isn't directly overridable):

```go
srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte(`{"id":1}`))
}))
defer srv.Close()
target, _ := url.Parse(srv.URL)

type redirectTransport struct{ host string }
func (t redirectTransport) RoundTrip(req *http.Request) (*http.Response, error) {
    req.URL.Scheme, req.URL.Host = "http", t.host
    return http.DefaultTransport.RoundTrip(req)
}

client := staxfattmerchantapi.NewClient(
    staxfattmerchantapi.CreateConfiguration(
        staxfattmerchantapi.WithHttpConfiguration(
            staxfattmerchantapi.CreateHttpConfiguration(staxfattmerchantapi.WithTransport(redirectTransport{host: target.Host})),
        ),
    ),
)
```

## Notes

- **Retries are off by default**, so a stubbed `5xx` fails immediately — no need to disable them. If your
  shared/production config enables retries, build the test client without `WithRetryConfiguration` (or set
  `WithMaxRetryAttempts(0)`) so tests don't wait through backoff. See **go-configuration-resilience**.
- To test that retries *do* fire, have the stub return `503` then `200` and count `RoundTrip` calls —
  remember only `GET`/`PUT` are retried by default.
- Guard against a hung stub with `context.WithTimeout` in the test.
- Look up an operation's signature or a typed error's fields in the SDK source — don't guess from the
  module cache.
