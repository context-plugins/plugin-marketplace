using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Details1CloroDevMonitorApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service")]
    public string? Service { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
