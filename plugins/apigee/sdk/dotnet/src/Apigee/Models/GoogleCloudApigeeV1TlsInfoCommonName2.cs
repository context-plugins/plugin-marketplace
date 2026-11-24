using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The TLS Common Name of the certificate.
/// </summary>
public record GoogleCloudApigeeV1TlsInfoCommonName2
{
    /// <summary>
    /// Indicates whether the cert should be matched against as a wildcard cert.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wildcardMatch")]
    public bool? WildcardMatch { get; init; }

    /// <summary>
    /// The TLS Common Name string of the certificate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
