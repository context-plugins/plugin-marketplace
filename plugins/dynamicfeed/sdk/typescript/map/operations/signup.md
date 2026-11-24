<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signup — operations

Accessor: `client.signup` · Source: `src/resources/signup.ts` · 1 operation · Request and error types: namespace `Signup`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### signupSignupPost

- **Signature**: `signupSignupPost(request?: Signup.SignupSignupPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Signup.SignupSignupPostError>`
- **Wire**: `POST /signup`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Signup.SignupSignupPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Signup.SignupSignupPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BodySignupSignupPost` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BodySignupSignupPost` | `bodySignupSignupPostSchema` | `src/models/body-signup-signup-post.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

