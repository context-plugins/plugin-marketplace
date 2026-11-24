using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Models;

public record ChartFilterPlay
{
    /// <summary>
    /// An enumeration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collection")]
    public Collection? Collection { get; init; }

    [JsonPropertyName("country")]
    public required string Country { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date")]
    public string? Date { get; init; }

    /// <summary>
    /// An enumeration.
    /// </summary>
    [JsonPropertyName("category")]
    public required PlayCategory Category { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
