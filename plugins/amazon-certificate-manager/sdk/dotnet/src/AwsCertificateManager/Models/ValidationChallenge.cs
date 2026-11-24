using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record ValidationChallenge
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EmailValidationChallenge")]
    public EmailValidationChallenge? EmailValidationChallenge { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DnsValidationChallenge")]
    public DnsValidationChallenge? DnsValidationChallenge { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
