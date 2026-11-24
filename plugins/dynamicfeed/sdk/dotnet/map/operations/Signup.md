<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signup — operations

Accessor: `client.Signup` · Source: `src/DynamicFeed/Api/Signup.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SignupSignupPost

- **Signature**: `SignupSignupPost(SignupSignupPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<SignupSignupPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SignupSignupPostRequest` | `src/DynamicFeed/Requests/Signup/SignupSignupPostRequest.cs` |
| `BodySignupSignupPost` | `src/DynamicFeed/Models/BodySignupSignupPost.cs` |
| `SignupSignupPostError` | `src/DynamicFeed/Errors/SignupSignupPostError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

