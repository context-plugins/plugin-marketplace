using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. mTLS configuration for the OTel Collector endpoint. Required when <c>otel_collector_security_scheme</c> == MTLS; must not be set otherwise.
/// </summary>
public record GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2
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
