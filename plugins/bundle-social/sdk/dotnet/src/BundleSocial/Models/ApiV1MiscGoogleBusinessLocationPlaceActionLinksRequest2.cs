using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }
}
