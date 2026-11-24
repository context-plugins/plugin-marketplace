using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record Override
{
    [JsonPropertyName("_project")]
    public required string Project { get; init; }

    [JsonPropertyName("_environment")]
    public required string Environment { get; init; }

    [JsonPropertyName("_feature")]
    public required string Feature { get; init; }

    [JsonPropertyName("_variation")]
    public required string Variation { get; init; }

    [JsonPropertyName("dvcUserId")]
    public required string DvcUserId { get; init; }

    [JsonPropertyName("createdAt")]
    public required double CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required double UpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("a0_user")]
    public string? A0User { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
