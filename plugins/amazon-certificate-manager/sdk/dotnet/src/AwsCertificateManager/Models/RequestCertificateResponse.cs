using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record RequestCertificateResponse
{
    /// <summary>
    /// String that contains the ARN of the issued certificate. This must be of the form: arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CertificateArn")]
    public string? CertificateArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
