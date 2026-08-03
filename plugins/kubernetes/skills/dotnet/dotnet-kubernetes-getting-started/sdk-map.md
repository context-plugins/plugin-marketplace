# SDK map — Kubernetes (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | Kubernetes |
| Root namespace/module | `Kubernetes` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `65568e9` (`65568e9c4c0aec5475506a95c5187ffea3aaeba1`, tagged `65568e9`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/kubernetes-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using Kubernetes;
using Kubernetes.Servers; // ServerEnvironment lives here

var options = new KubernetesClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new KubernetesClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddKubernetesClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`KubernetesClient.cs`.

<!-- crawler:client-options -->
All `KubernetesClientOptions` properties (source: `KubernetesClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `BearerToken` | `string?` |

`RetryOptions` members (source: `Core/Configuration/RetryOptions.cs`; build a full instance — all members are `required` — or start from `RetryOptions.Default()`):

| Member | Type |
|---|---|
| `StatusCodesToRetry` | `IReadOnlyList<HttpStatusCode>` |
| `HttpMethodsToRetry` | `IReadOnlyList<HttpMethod>` |
| `MaxRetries` | `int` |
| `Delay` | `TimeSpan` |
| `Timeout` | `TimeSpan?` |
| `BackOffFactor` | `int` |
| `UseExponentialBackoff` | `bool` |
| `MaxJitter` | `TimeSpan` |
| `OnRetry` | `Action<RetryAttempt>?` |

Client constructor(s):

- `KubernetesClient(HttpClient httpClient, KubernetesClientOptions options)`
<!-- /crawler:client-options -->

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**. On an error status the SDK throws `SdkException<TError>`
(`Core/Exceptions/SdkException.cs`) exposing `.Error` of type `TError`. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class with status-specific
  `TryGet…(out …)` accessors (returns `true` when that shape is present) plus the inherited
  `TryGetRawError(out RawError)` fallback. The per-operation rows name the exact `TryGet…` methods and the HTTP
  status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`Core/ErrorResponse/RawError.cs`): `StatusCode`,
  `ReadAsString()`, `ReadAsJson<T>()`, `ReadAsBytes()`.

<!-- gen:error-core -->
Core error types (`Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
|---|---|---|
| `ApiError` — abstract base of all 1190 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `Core/ErrorResponse/RawError.cs` |

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions: field names, declared types, and JSON wire names live on the records pages / `unions.md` like any other model.
<!-- /gen:error-core -->

```csharp
try { var resp = await client.{ApiGroup}.{Operation}(body); }
catch (SdkException<{Operation}Error> ex)              // Case A
{
    if (ex.Error.TryGetSomeShape(out var typed))      { /* handle that status */ }
    else if (ex.Error.TryGetRawError(out var raw))    { /* other statuses */ }
}
catch (SdkException<RawError> ex)                     // Case B
{
    var status = ex.Error.StatusCode;
    var body   = ex.Error.ReadAsString();
}
```

<!-- crawler:op-stats -->
**No-throw ("`…Result`") variants: absent across this SDK** — every operation is throw-only.
Of **1190 operations**, **1190 are Case A (typed)** and **0 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (65 groups, 1190 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `Admissionregistration` | 1 | [map/operations/Admissionregistration.md](map/operations/Admissionregistration.md) |
| `AdmissionregistrationV1` | 58 | [map/operations/AdmissionregistrationV1.md](map/operations/AdmissionregistrationV1.md) |
| `AdmissionregistrationV1Alpha1` | 19 | [map/operations/AdmissionregistrationV1Alpha1.md](map/operations/AdmissionregistrationV1Alpha1.md) |
| `AdmissionregistrationV1Beta1` | 19 | [map/operations/AdmissionregistrationV1Beta1.md](map/operations/AdmissionregistrationV1Beta1.md) |
| `Apiextensions` | 1 | [map/operations/Apiextensions.md](map/operations/Apiextensions.md) |
| `ApiextensionsV1` | 13 | [map/operations/ApiextensionsV1.md](map/operations/ApiextensionsV1.md) |
| `Apiregistration` | 1 | [map/operations/Apiregistration.md](map/operations/Apiregistration.md) |
| `ApiregistrationV1` | 13 | [map/operations/ApiregistrationV1.md](map/operations/ApiregistrationV1.md) |
| `Apis` | 1 | [map/operations/Apis.md](map/operations/Apis.md) |
| `Apps` | 1 | [map/operations/Apps.md](map/operations/Apps.md) |
| `AppsV1` | 77 | [map/operations/AppsV1.md](map/operations/AppsV1.md) |
| `AuthenticationApi` | 1 | [map/operations/AuthenticationApi.md](map/operations/AuthenticationApi.md) |
| `AuthenticationV1` | 3 | [map/operations/AuthenticationV1.md](map/operations/AuthenticationV1.md) |
| `Authorization` | 1 | [map/operations/Authorization.md](map/operations/Authorization.md) |
| `AuthorizationV1` | 5 | [map/operations/AuthorizationV1.md](map/operations/AuthorizationV1.md) |
| `Autoscaling` | 1 | [map/operations/Autoscaling.md](map/operations/Autoscaling.md) |
| `AutoscalingV1` | 15 | [map/operations/AutoscalingV1.md](map/operations/AutoscalingV1.md) |
| `AutoscalingV2` | 15 | [map/operations/AutoscalingV2.md](map/operations/AutoscalingV2.md) |
| `Batch` | 1 | [map/operations/Batch.md](map/operations/Batch.md) |
| `BatchV1` | 29 | [map/operations/BatchV1.md](map/operations/BatchV1.md) |
| `Certificates` | 1 | [map/operations/Certificates.md](map/operations/Certificates.md) |
| `CertificatesV1` | 39 | [map/operations/CertificatesV1.md](map/operations/CertificatesV1.md) |
| `CertificatesV1Beta1` | 24 | [map/operations/CertificatesV1Beta1.md](map/operations/CertificatesV1Beta1.md) |
| `Coordination` | 1 | [map/operations/Coordination.md](map/operations/Coordination.md) |
| `CoordinationV1` | 12 | [map/operations/CoordinationV1.md](map/operations/CoordinationV1.md) |
| `CoordinationV1Alpha2` | 12 | [map/operations/CoordinationV1Alpha2.md](map/operations/CoordinationV1Alpha2.md) |
| `CoordinationV1Beta1` | 12 | [map/operations/CoordinationV1Beta1.md](map/operations/CoordinationV1Beta1.md) |
| `CoreApi` | 1 | [map/operations/CoreApi.md](map/operations/CoreApi.md) |
| `CoreV1` | 236 | [map/operations/CoreV1.md](map/operations/CoreV1.md) |
| `Discovery` | 1 | [map/operations/Discovery.md](map/operations/Discovery.md) |
| `DiscoveryV1` | 12 | [map/operations/DiscoveryV1.md](map/operations/DiscoveryV1.md) |
| `Events` | 1 | [map/operations/Events.md](map/operations/Events.md) |
| `EventsV1` | 12 | [map/operations/EventsV1.md](map/operations/EventsV1.md) |
| `FlowcontrolApiserver` | 1 | [map/operations/FlowcontrolApiserver.md](map/operations/FlowcontrolApiserver.md) |
| `FlowcontrolApiserverV1` | 25 | [map/operations/FlowcontrolApiserverV1.md](map/operations/FlowcontrolApiserverV1.md) |
| `InternalApiserver` | 1 | [map/operations/InternalApiserver.md](map/operations/InternalApiserver.md) |
| `InternalApiserverV1Alpha1` | 13 | [map/operations/InternalApiserverV1Alpha1.md](map/operations/InternalApiserverV1Alpha1.md) |
| `Lifecycle` | 1 | [map/operations/Lifecycle.md](map/operations/Lifecycle.md) |
| `LifecycleV1Alpha1` | 29 | [map/operations/LifecycleV1Alpha1.md](map/operations/LifecycleV1Alpha1.md) |
| `Logs` | 2 | [map/operations/Logs.md](map/operations/Logs.md) |
| `Networking` | 1 | [map/operations/Networking.md](map/operations/Networking.md) |
| `NetworkingV1` | 56 | [map/operations/NetworkingV1.md](map/operations/NetworkingV1.md) |
| `Node` | 1 | [map/operations/Node.md](map/operations/Node.md) |
| `NodeV1` | 10 | [map/operations/NodeV1.md](map/operations/NodeV1.md) |
| `Openid` | 1 | [map/operations/Openid.md](map/operations/Openid.md) |
| `Policy` | 1 | [map/operations/Policy.md](map/operations/Policy.md) |
| `PolicyV1` | 15 | [map/operations/PolicyV1.md](map/operations/PolicyV1.md) |
| `RbacAuthorization` | 1 | [map/operations/RbacAuthorization.md](map/operations/RbacAuthorization.md) |
| `RbacAuthorizationV1` | 41 | [map/operations/RbacAuthorizationV1.md](map/operations/RbacAuthorizationV1.md) |
| `Resource` | 1 | [map/operations/Resource.md](map/operations/Resource.md) |
| `ResourceV1` | 56 | [map/operations/ResourceV1.md](map/operations/ResourceV1.md) |
| `ResourceV1Alpha3` | 25 | [map/operations/ResourceV1Alpha3.md](map/operations/ResourceV1Alpha3.md) |
| `ResourceV1Beta1` | 44 | [map/operations/ResourceV1Beta1.md](map/operations/ResourceV1Beta1.md) |
| `ResourceV1Beta2` | 56 | [map/operations/ResourceV1Beta2.md](map/operations/ResourceV1Beta2.md) |
| `Scheduling` | 1 | [map/operations/Scheduling.md](map/operations/Scheduling.md) |
| `SchedulingV1` | 10 | [map/operations/SchedulingV1.md](map/operations/SchedulingV1.md) |
| `SchedulingV1Alpha3` | 40 | [map/operations/SchedulingV1Alpha3.md](map/operations/SchedulingV1Alpha3.md) |
| `SchedulingV1Beta1` | 26 | [map/operations/SchedulingV1Beta1.md](map/operations/SchedulingV1Beta1.md) |
| `Storage` | 1 | [map/operations/Storage.md](map/operations/Storage.md) |
| `Storagemigration` | 1 | [map/operations/Storagemigration.md](map/operations/Storagemigration.md) |
| `StoragemigrationV1` | 13 | [map/operations/StoragemigrationV1.md](map/operations/StoragemigrationV1.md) |
| `StoragemigrationV1Beta1` | 13 | [map/operations/StoragemigrationV1Beta1.md](map/operations/StoragemigrationV1Beta1.md) |
| `StorageV1` | 63 | [map/operations/StorageV1.md](map/operations/StorageV1.md) |
| `VersionApi` | 1 | [map/operations/VersionApi.md](map/operations/VersionApi.md) |
| `WellKnown` | 1 | [map/operations/WellKnown.md](map/operations/WellKnown.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 834 | [`IoK8SApiAdmissionregistrationV1Alpha1ApplyConfiguration` … `IoK8SApiAuthorizationV1FieldSelectorAttributes`](map/models/records-1-Io-Io.md) · [`IoK8SApiAuthorizationV1LabelSelectorAttributes` … `IoK8SApiCoreV1ConfigMapKeySelector`](map/models/records-2-Io-Io.md) · [`IoK8SApiCoreV1ConfigMapList` … `IoK8SApiCoreV1PodAntiAffinity`](map/models/records-3-Io-Io.md) · [`IoK8SApiCoreV1PodCertificateProjection` … `IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion`](map/models/records-4-Io-Io.md) · [`IoK8SApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources` … `IoK8SApiRbacV1ClusterRole`](map/models/records-5-Io-Io.md) · [`IoK8SApiRbacV1ClusterRoleBinding` … `IoK8SApiResourceV1Beta2ResourceClaim`](map/models/records-6-Io-Io.md) · [`IoK8SApiResourceV1Beta2ResourceClaimConsumerReference` … `IoK8SApiSchedulingV1PriorityClassList`](map/models/records-7-Io-Io.md) · [`IoK8SApiStoragemigrationV1Beta1StorageVersionMigration` … `IoK8SKubeAggregatorPkgApisApiregistrationV1ServiceReference`](map/models/records-8-Io-Io.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 0 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 0 | [map/models/enums.md](map/models/enums.md) |
<!-- /gen:models-table -->

Model conventions: records are immutable with `init`-only setters; `required` properties must be set in the
object initializer; nullable (`T?`) properties are optional. Each record field is listed as
`CSharpName (wire_name): Type` — the parenthesized name is the JSON wire name (`[JsonPropertyName]`).
Unions wrap `Optional<T>` variants — construct via a static factory or implicit
conversion, read back via `TryGet…(out …)`. Enums are **not** C# enums — build with `Type.FromValue("wire")`
or the static members (enums.md lists the literal member names: `SomeEnum.SomeMember`, not
`SomeEnum.some_member`).

<!-- gen:namespaces -->
Namespaces by content type (add `using` accordingly):

| Contents | Namespace(s) |
|---|---|
| Client & options (root) | `Kubernetes` |
| Operation controllers (`Api/`) | `Kubernetes.Api` |
| Records (`Models/`) | `Kubernetes.Models` |
| Error classes (`Errors/`) | `Kubernetes.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `KubernetesClientOptions` (source: `KubernetesClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `BearerToken` | `string?` | Bearer Token authentication |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
