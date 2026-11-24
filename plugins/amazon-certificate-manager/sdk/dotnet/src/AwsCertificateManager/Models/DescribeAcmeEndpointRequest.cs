using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record DescribeAcmeEndpointRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME endpoint.
    /// </summary>
    [JsonPropertyName("AcmeEndpointArn")]
    public required string AcmeEndpointArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
