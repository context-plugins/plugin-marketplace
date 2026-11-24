using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

/// <summary>
/// Place card from a Google AI answer that Google geo-tagged
/// </summary>
public record GoogleMapPlace
{
    /// <summary>
    /// Place name
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Position index of the place in the results
    /// </summary>
    [JsonPropertyName("index")]
    public required int Index { get; init; }

    /// <summary>
    /// Place thumbnail image URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail")]
    [Format(FormatKind.Uri)]
    public string? Thumbnail { get; init; }

    /// <summary>
    /// Star rating (0-5)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rating")]
    public double? Rating { get; init; }

    /// <summary>
    /// Number of reviews
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviews")]
    public int? Reviews { get; init; }

    /// <summary>
    /// Place type or category
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Full postal address, as Google gives it on the card's Directions link
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public string? Address { get; init; }

    /// <summary>
    /// Operating status
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Google Knowledge Graph ID for the place. A place and its <c>map</c> entry share it. Omitted when Google did not geo-tag the card.
    /// </summary>
    [JsonPropertyName("placeId")]
    public required string PlaceId { get; init; }

    /// <summary>
    /// Phone number from the card's Call button, formatted as Google ships it for the locale. Omitted when the card has no Call button.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// Business website from the card's Website button. Omitted when the card has no Website button.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    [Format(FormatKind.Uri)]
    public string? Website { get; init; }

    /// <summary>
    /// Google Maps URL for the place
    /// </summary>
    [JsonPropertyName("link")]
    [Format(FormatKind.Uri)]
    public required string Link { get; init; }

    /// <summary>
    /// Geographic coordinates of the place
    /// </summary>
    [JsonPropertyName("gpsCoordinates")]
    public required GpsCoordinates GpsCoordinates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
