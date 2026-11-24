using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record DetailsCloroDevMonitorApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public double? Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
