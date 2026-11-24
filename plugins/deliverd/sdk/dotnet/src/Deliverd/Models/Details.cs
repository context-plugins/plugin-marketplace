using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Details
{
    [JsonPropertyName("expectedVersion")]
    public required double ExpectedVersion { get; init; }

    [JsonPropertyName("currentVersion")]
    public required double CurrentVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
