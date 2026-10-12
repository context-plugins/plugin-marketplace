---
name: "dotnet-authentication"
description: "Authentication for the Frankfurter API .NET SDK in C# — this API declares no security schemes, so FrankfurterApiClientOptions exposes no credentials properties at all. Load to confirm that before hunting for an auth knob, or when a call unexpectedly comes back 401/403."
---

# Authenticating the Frankfurter API .NET SDK client

**The Frankfurter API API declares no security schemes, so this SDK generates no credentials properties at all.** `FrankfurterApiClientOptions` has no authentication surface — there is nothing to set and no scheme to configure. Construct the client as `dotnet-client-initialization` describes and call operations directly.

`FrankfurterApi.Core.Authentication` still ships the scheme classes as shared runtime code — every APIMatic .NET SDK carries that folder whether its API uses it or not. Its presence is **not** evidence of an auth knob you have missed.

## Operations that need no credentials

Every operation on this API is public: each endpoint uses `NoneAuthScheme` and sends no credential. Construct the client and call them directly.

## Notes

- There are no credentials to set, and no secret to keep out of source. `AddFrankfurterApiClient(options => ...)` still registers the client for DI — see `dotnet-client-initialization`.

