using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record CreateEndpointResponse
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of the endpoint being created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndpointArn")]
    public string? EndpointArn { get; init; }

    /// <summary>
    /// The Amazon Resource Number (ARN) of the model to which the endpoint is attached.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelArn")]
    public string? ModelArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
