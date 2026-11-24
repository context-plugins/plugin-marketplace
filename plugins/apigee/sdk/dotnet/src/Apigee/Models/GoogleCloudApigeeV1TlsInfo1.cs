using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. Specifies TLS configuration info for this TargetServer. The JSON name is <c>sSLInfo</c> for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.
/// </summary>
public record GoogleCloudApigeeV1TlsInfo1
{
    /// <summary>
    /// Optional. Enables two-way TLS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientAuthEnabled")]
    public bool? ClientAuthEnabled { get; init; }

    /// <summary>
    /// Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// TLS is strictly enforced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enforce")]
    public bool? Enforce { get; init; }

    /// <summary>
    /// The TLS Common Name of the certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commonName")]
    public GoogleCloudApigeeV1TlsInfoCommonName2? CommonName { get; init; }

    /// <summary>
    /// The resource ID of the truststore.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trustStore")]
    public string? TrustStore { get; init; }

    /// <summary>
    /// If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreValidationErrors")]
    public bool? IgnoreValidationErrors { get; init; }

    /// <summary>
    /// The TLS versioins to be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protocols")]
    public IReadOnlyList<string>? Protocols { get; init; }

    /// <summary>
    /// The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ciphers")]
    public IReadOnlyList<string>? Ciphers { get; init; }

    /// <summary>
    /// Required if <c>client_auth_enabled</c> is true. The resource ID of the keystore.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyStore")]
    public string? KeyStore { get; init; }

    /// <summary>
    /// Required if <c>client_auth_enabled</c> is true. The resource ID for the alias containing the private key and cert.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyAlias")]
    public string? KeyAlias { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
