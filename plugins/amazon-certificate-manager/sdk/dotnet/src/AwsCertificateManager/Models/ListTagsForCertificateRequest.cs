using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ListTagsForCertificateRequest
{
    /// <summary>
    /// String that contains the ARN of the ACM certificate for which you want to list the tags. This must have the following form: arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more information about ARNs, see Amazon Resource Names (ARNs).
    /// </summary>
    [JsonPropertyName("CertificateArn")]
    public required string CertificateArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
