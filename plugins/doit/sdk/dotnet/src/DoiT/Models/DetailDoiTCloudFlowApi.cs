using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record DetailDoiTCloudFlowApi
{
    [JsonPropertyName("nodeId")]
    public required string NodeId { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
