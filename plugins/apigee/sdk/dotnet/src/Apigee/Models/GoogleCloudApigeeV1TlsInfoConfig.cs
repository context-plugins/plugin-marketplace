using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1TlsInfoConfig
{
    /// <summary>
    /// Flag that specifies whether to ignore TLS certificate validation errors. Set to <c>true</c> to ignore errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreValidationErrors")]
    public bool? IgnoreValidationErrors { get; init; }

    /// <summary>
    /// Name of the alias used for client-side authentication in the following format: <c>organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyAlias")]
    public string? KeyAlias { get; init; }

    /// <summary>
    /// Common name to validate the target server against.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commonName")]
    public GoogleCloudApigeeV1CommonNameConfig2? CommonName { get; init; }

    /// <summary>
    /// List of TLS protocols that are granted access.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protocols")]
    public IReadOnlyList<string>? Protocols { get; init; }

    /// <summary>
    /// Name of the keystore or keystore reference containing trusted certificates for the server in the following format: <c>organizations/{org}/environments/{env}/keystores/{keystore}</c> or <c>organizations/{org}/environments/{env}/references/{reference}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trustStore")]
    public string? TrustStore { get; init; }

    /// <summary>
    /// Flag that specifies whether client-side authentication is enabled for the target server. Enables two-way TLS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientAuthEnabled")]
    public bool? ClientAuthEnabled { get; init; }

    /// <summary>
    /// List of ciphers that are granted access.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ciphers")]
    public IReadOnlyList<string>? Ciphers { get; init; }

    /// <summary>
    /// Reference name and alias pair to use for client-side authentication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyAliasReference")]
    public GoogleCloudApigeeV1KeyAliasReference3? KeyAliasReference { get; init; }

    /// <summary>
    /// Flag that specifies whether one-way TLS is enabled. Set to <c>true</c> to enable one-way TLS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Flag that enforces TLS settings
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enforce")]
    public bool? Enforce { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
