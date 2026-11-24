using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DeleteResiliencyGroupRequest
{
    /// <summary>
    /// The ID of the resiliency group.
    /// </summary>
    [JsonPropertyName("resiliencyGroupId")]
    public required string ResiliencyGroupId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
