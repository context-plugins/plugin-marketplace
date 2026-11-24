using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record DescribeAcmeDomainValidationRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME domain validation.
    /// </summary>
    [JsonPropertyName("AcmeDomainValidationArn")]
    public required string AcmeDomainValidationArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
