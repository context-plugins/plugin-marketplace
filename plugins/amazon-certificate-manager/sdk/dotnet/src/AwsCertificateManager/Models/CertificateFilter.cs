using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record CertificateFilter
{
    /// <summary>
    /// Filter by certificate ARN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateArn")]
    public string? CertificateArn { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("X509AttributeFilter")]
    public X509AttributeFilter? X509AttributeFilter { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmCertificateMetadataFilter")]
    public AcmCertificateMetadataFilter? AcmCertificateMetadataFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
