using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record AlternativePerspectives
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contrarian_view")]
    public string? ContrarianView { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overlooked_factors")]
    public string? OverlookedFactors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
