using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record X509AttributeFilter
{
    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Subject")]
    public SubjectFilter? Subject { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SubjectAlternativeName")]
    public SubjectAlternativeNameFilter? SubjectAlternativeName { get; init; }

    /// <summary>
    /// Filter by extended key usage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExtendedKeyUsage")]
    public ExtendedKeyUsage1? ExtendedKeyUsage { get; init; }

    /// <summary>
    /// Filter by key usage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KeyUsage")]
    public KeyUsage1? KeyUsage { get; init; }

    /// <summary>
    /// Filter by key algorithm.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KeyAlgorithm")]
    public KeyAlgorithm1? KeyAlgorithm { get; init; }

    /// <summary>
    /// Filter by serial number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SerialNumber")]
    public string? SerialNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotAfter")]
    public TimestampRange? NotAfter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotBefore")]
    public TimestampRange? NotBefore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
