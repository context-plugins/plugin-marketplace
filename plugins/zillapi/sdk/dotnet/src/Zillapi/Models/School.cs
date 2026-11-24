using System.Text.Json.Serialization;
using Zillapi.Core.Models;

namespace Zillapi.Models;

public record School
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// GreatSchools rating (1–10).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating")]
    public int? Rating { get; init; }

    /// <summary>
    /// Distance in miles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("distance")]
    public double? Distance { get; init; }

    /// <summary>
    /// e.g. public, private, charter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// e.g. Elementary, Middle, High.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("level")]
    public string? Level { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
