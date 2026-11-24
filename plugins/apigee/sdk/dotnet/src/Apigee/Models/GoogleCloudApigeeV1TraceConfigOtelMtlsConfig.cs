using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// OtelMtlsConfig configures mutual TLS for the outbound OTel Collector connection by referencing already-uploaded Keystore/Truststore aliases. Key/cert material is uploaded via the existing Keystore Alias APIs (POST .../keystores/{ks}/aliases), the same APIs used to configure mTLS for <c>TargetServer.tls_info</c>. Only the resource IDs of those aliases live in this message; no secret material is inlined into TraceConfig. Field shape mirrors <c>TlsInfo</c> used by <c>TargetServer.tls_info</c>: - <c>key_store</c> and <c>trust_store</c> accept either a plain keystore ID or a <c>ref://{referenceID}</c> URI (an environment-scoped Reference whose <c>resource_type</c> is <c>KeyStore</c>/<c>TrustStore</c>). References enable rotation without editing the TraceConfig itself. - <c>key_alias</c> is the plain alias ID within <c>key_store</c>. Fields that would normally appear on <c>TlsInfo</c> (enabled, client_auth_enabled, protocols, enforce, ignore_validation_errors) are intentionally omitted from this customer surface. The runtime enforces secure defaults: - Mutual TLS is always required (both server AND client cert exchanged). - Server certificate validation is always strict (no ignoring errors). - TLS 1.2 and TLS 1.3 are enabled; older versions are rejected.
/// </summary>
public record GoogleCloudApigeeV1TraceConfigOtelMtlsConfig
{
    /// <summary>
    /// Required. Keystore holding the client-side key/cert alias. Accepts either a plain keystore ID (e.g. <c>my-keystore</c>) resolving to <c>organizations/{org}/environments/{env}/keystores/{key_store}</c>, or a reference URI of the form <c>ref://{referenceID}</c> that points to a Reference whose <c>resource_type</c> is <c>KeyStore</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyStore")]
    public string? KeyStore { get; init; }

    /// <summary>
    /// Required. Plain alias ID within <c>key_store</c> that contains the client key/cert used for mTLS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyAlias")]
    public string? KeyAlias { get; init; }

    /// <summary>
    /// Required. Truststore holding the CA(s) that signed the OTel Collector's server certificate. Accepts either a plain keystore ID (e.g. <c>my-truststore</c>) resolving to <c>organizations/{org}/environments/{env}/keystores/{trust_store}</c>, or a reference URI of the form <c>ref://{referenceID}</c> that points to a Reference whose <c>resource_type</c> is <c>KeyStore</c> (used as a truststore).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trustStore")]
    public string? TrustStore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
