using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record LinksPlatformEventsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public string? Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
