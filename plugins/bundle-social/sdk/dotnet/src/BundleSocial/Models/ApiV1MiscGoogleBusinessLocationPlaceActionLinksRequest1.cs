using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("placeActionLink")]
    public required PlaceActionLink PlaceActionLink { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("fields")]
    [MinLength(1)]
    [MaxLength(3)]
    public required IReadOnlyList<Field5> Fields { get; init; }
}
