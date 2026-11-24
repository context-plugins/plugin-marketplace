<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signup — operations

Accessor: `client.signup` · Source: `dynamic_feed/apis/signup.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signup.signup_signup_post

- **Route**: `POST /signup`
- **Signature**: `def signup_signup_post(*, body: BodySignupSignupPost | BodySignupSignupPostDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, SignupSignupPostErrorBody]`
- **Error**: `SignupSignupPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BodySignupSignupPost` | `dynamic_feed/models/body_signup_signup_post.py` |
| `BodySignupSignupPostDict` | `dynamic_feed/models/body_signup_signup_post.py` |
| `SignupSignupPostErrorBody` | `dynamic_feed/errors/signup_signup_post_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

