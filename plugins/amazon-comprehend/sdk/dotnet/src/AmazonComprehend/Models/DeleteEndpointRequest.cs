using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DeleteEndpointRequest
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of the endpoint being deleted.
    /// </summary>
    [JsonPropertyName("EndpointArn")]
    public required string EndpointArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
