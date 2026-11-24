using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record UpdateCertificateOptionsRequest
{
    /// <summary>
    /// ARN of the requested certificate to update. This must be of the form: arn:aws:acm:us-east-1:account:certificate/12345678-1234-1234-1234-123456789012
    /// </summary>
    [JsonPropertyName("CertificateArn")]
    public required string CertificateArn { get; init; }

    [JsonPropertyName("Options")]
    public required CertificateOptionsAwsCertificateManagerOperationsApi Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
