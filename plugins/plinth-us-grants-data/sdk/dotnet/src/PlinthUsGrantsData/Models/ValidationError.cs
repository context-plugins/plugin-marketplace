using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

public record ValidationError
{
    [JsonPropertyName("loc")]
    public required IReadOnlyList<Location> Loc { get; init; }

    [JsonPropertyName("msg")]
    public required string Msg { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public object? Input { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ctx")]
    public object? Ctx { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
