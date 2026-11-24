using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record DescribeAcmeAccountRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME endpoint.
    /// </summary>
    [JsonPropertyName("AcmeEndpointArn")]
    public required string AcmeEndpointArn { get; init; }

    /// <summary>
    /// The URL of the ACME account.
    /// </summary>
    [JsonPropertyName("AccountUrl")]
    public required string AccountUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
