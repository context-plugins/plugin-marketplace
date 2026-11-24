using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record SideTasks
{
    [JsonPropertyName("open")]
    public required double Open { get; init; }

    [JsonPropertyName("done")]
    public required double Done { get; init; }

    [JsonPropertyName("awaiting")]
    public required double Awaiting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
