using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record RevokeCertificateRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the public or private certificate that will be revoked. The ARN must have the following form: arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012
    /// </summary>
    [JsonPropertyName("CertificateArn")]
    public required string CertificateArn { get; init; }

    /// <summary>
    /// Specifies why you revoked the certificate.
    /// </summary>
    [JsonPropertyName("RevocationReason")]
    public required RevocationReason1 RevocationReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
