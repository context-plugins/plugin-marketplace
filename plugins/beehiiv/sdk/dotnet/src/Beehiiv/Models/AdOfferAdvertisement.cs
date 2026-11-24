using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdOfferAdvertisement
{
    /// <summary>
    /// The ID of the advertisement creative.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Whether this is the recommended creative for the offer.
    /// </summary>
    [JsonPropertyName("recommended")]
    public required bool Recommended { get; init; }

    /// <summary>
    /// The advertisement name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The advertisement headline.
    /// </summary>
    [JsonPropertyName("headline")]
    public required string Headline { get; init; }

    /// <summary>
    /// The advertisement description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The advertisement creative kind.
    /// </summary>
    [JsonPropertyName("kind")]
    public required string Kind { get; init; }

    /// <summary>
    /// The sponsor label used by the creative.
    /// </summary>
    [JsonPropertyName("sponsor_text")]
    public required string SponsorText { get; init; }

    /// <summary>
    /// The plain text extracted from the advertisement creative.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
