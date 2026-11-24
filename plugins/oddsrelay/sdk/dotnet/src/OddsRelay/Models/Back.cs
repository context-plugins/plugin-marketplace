using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;

namespace OddsRelay.Models;

public record Back
{
    /// <summary>
    /// Venue key (<c>/v2/bookmakers</c>).
    /// </summary>
    [JsonPropertyName("bookmaker")]
    public required string? Bookmaker { get; init; }

    [JsonPropertyName("price")]
    public required Price? Price { get; init; }

    /// <summary>
    /// The venue's page for this event.
    /// </summary>
    [JsonPropertyName("link")]
    public required string? Link { get; init; }

    /// <summary>
    /// <c>each-way</c>, <c>extra-place</c>: places paid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("places")]
    public int? Places { get; init; }

    /// <summary>
    /// <c>each-way</c>, <c>extra-place</c>: the place terms as a fraction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("place_fraction")]
    public double? PlaceFraction { get; init; }

    /// <summary>
    /// <c>dutching</c> only: 8 hex naming the dutch this leg belongs to. Group one market's offers by it and rate a dutch as 100 / sum(1/price).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dutch_id")]
    public string? DutchId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
