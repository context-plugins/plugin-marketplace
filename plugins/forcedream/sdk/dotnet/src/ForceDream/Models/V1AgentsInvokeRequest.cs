using System.Text.Json.Serialization;
using ForceDream.Core.Models;

namespace ForceDream.Models;

public record V1AgentsInvokeRequest
{
    [JsonPropertyName("task")]
    public required string Task { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
