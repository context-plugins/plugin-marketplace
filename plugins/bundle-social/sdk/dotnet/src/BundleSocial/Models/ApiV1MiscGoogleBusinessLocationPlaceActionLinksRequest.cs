using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("placeActionLink")]
    public required PlaceActionLink PlaceActionLink { get; init; }
}
