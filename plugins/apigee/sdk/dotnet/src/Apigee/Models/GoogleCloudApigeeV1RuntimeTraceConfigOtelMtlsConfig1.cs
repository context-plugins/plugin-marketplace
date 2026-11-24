using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. mTLS configuration for the OTel Collector endpoint. Required when <c>otel_collector_security_scheme</c> is <c>MTLS</c>; must be absent otherwise.
/// </summary>
public record GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1
{
    /// <summary>
    /// Full alias resource name of the client-side key/cert alias. Format: <c>organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}</c> Set when the customer supplied a plain keystore ID in <c>TraceConfig.OtelMtlsConfig.key_store</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyAlias")]
    public string? KeyAlias { get; init; }

    /// <summary>
    /// Full resource name of the truststore holding the CA(s) that signed the OTel Collector's server certificate. Either a keystore or a reference resource name, mirroring <c>TlsInfoConfig.trust_store</c> above: <c>organizations/{org}/environments/{env}/keystores/{keystore}</c> <c>organizations/{org}/environments/{env}/references/{reference}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trustStore")]
    public string? TrustStore { get; init; }

    /// <summary>
    /// Reference name and alias-id pair. Set when the customer supplied a <c>ref://{referenceID}</c> URI in <c>TraceConfig.OtelMtlsConfig.key_store</c>. Resolved via the References catalog the same way as <c>TlsInfoConfig.key_alias_reference</c> in target-server TLS. Reuses the top-level <c>KeyAliasReference</c> message defined for <c>TlsInfoConfig</c> above; no new message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyAliasReference")]
    public GoogleCloudApigeeV1KeyAliasReference1? KeyAliasReference { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
