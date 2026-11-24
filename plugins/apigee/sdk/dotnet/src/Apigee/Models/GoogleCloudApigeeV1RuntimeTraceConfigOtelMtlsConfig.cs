using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Runtime-side view of <c>TraceConfig.OtelMtlsConfig</c> for the outbound OTel Collector mTLS connection. Shape mirrors <c>TlsInfoConfig</c> (in this same file, above) exactly. The oneof discriminates between a direct keystore reference and a <c>ref://</c>-indirected reference; both are surfaced on the wire without flattening. The referenced keystore must also appear in <c>EnvironmentConfig.keystores[]</c> so the underlying alias bytes are available at runtime. Referential integrity is enforced at trace-config update time: any PATCH that references a keystore not already present is rejected in the same transaction that would persist the update, and keystore/alias/reference deletion is blocked while a trace-config references it.
/// </summary>
public record GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig
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
