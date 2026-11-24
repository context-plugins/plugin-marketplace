---
name: "dotnet-authentication"
description: "Load before hunting for an auth setting on the DynamicFeed .NET SDK client in C#, or when a call unexpectedly comes back 401/403: DynamicFeedClientOptions has no credentials properties at all."
---

# Authenticating the DynamicFeed .NET SDK client

**`DynamicFeedClientOptions` has no credentials properties at all** — the DynamicFeed .NET SDK has nothing to set and no scheme to configure. Construct the client as `dotnet-client-initialization` describes and call operations directly.

`DynamicFeed.Core.Authentication` still holds scheme classes; its presence is **not** evidence of an auth knob you have missed.

## Operations that need no credentials

Every operation on this API is public and sends no credential. Construct the client and call them directly.

## Notes

- There are no credentials to set, and no secret to keep out of source. `AddDynamicFeedClient(options => ...)` still registers the client for DI — see `dotnet-client-initialization`.

