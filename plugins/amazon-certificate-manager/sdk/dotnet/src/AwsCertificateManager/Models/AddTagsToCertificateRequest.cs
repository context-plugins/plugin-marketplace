using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record AddTagsToCertificateRequest
{
    /// <summary>
    /// String that contains the ARN of the ACM certificate to which the tag is to be applied. This must be of the form: arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more information about ARNs, see Amazon Resource Names (ARNs).
    /// </summary>
    [JsonPropertyName("CertificateArn")]
    public required string CertificateArn { get; init; }

    /// <summary>
    /// The key-value pair that defines the tag. The tag value is optional.
    /// </summary>
    [JsonPropertyName("Tags")]
    public required IReadOnlyList<Tag> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
