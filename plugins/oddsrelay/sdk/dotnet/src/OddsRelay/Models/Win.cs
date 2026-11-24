using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;

namespace OddsRelay.Models;

public record Win
{
    [JsonPropertyName("exchange")]
    public required string Exchange { get; init; }

    [JsonPropertyName("price")]
    public required Price? Price { get; init; }

    /// <summary>
    /// Money available at that lay price.
    /// </summary>
    [JsonPropertyName("available")]
    public required double? Available { get; init; }

    /// <summary>
    /// <c>lay.place</c> only: the place market's places.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("places")]
    public int? Places { get; init; }

    [JsonPropertyName("link")]
    public required string? Link { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
