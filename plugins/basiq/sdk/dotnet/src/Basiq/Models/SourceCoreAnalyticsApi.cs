using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record SourceCoreAnalyticsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parameter")]
    public string? Parameter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
