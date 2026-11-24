using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record UpdateAcmeDomainValidationRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME domain validation to update.
    /// </summary>
    [JsonPropertyName("AcmeDomainValidationArn")]
    public required string AcmeDomainValidationArn { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PrevalidationOptions")]
    public PrevalidationOptions? PrevalidationOptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
