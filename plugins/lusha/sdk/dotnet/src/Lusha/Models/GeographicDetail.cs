using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record GeographicDetail
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zipcode")]
    public string? Zipcode { get; init; }

    /// <summary>
    /// Radius in miles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("distance")]
    public int? Distance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
