using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation;
using StayingApi.Core.Validation.Attributes;
using StayingApi.Models.AnyOf;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

public record Property
{
    [JsonPropertyName("id")]
    [MinLength(1)]
    public required string Id { get; init; }

    [JsonPropertyName("platform")]
    public required Platform Platform { get; init; }

    [JsonPropertyName("platformListingId")]
    [MinLength(1)]
    public required string PlatformListingId { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    [JsonPropertyName("propertyType")]
    public required PropertyType PropertyType { get; init; }

    [JsonPropertyName("location")]
    public required Location Location { get; init; }

    [JsonPropertyName("starRating")]
    public required StarRating StarRating { get; init; }

    [JsonPropertyName("guestRating")]
    public required GuestRating GuestRating { get; init; }

    [JsonPropertyName("ratingScale")]
    public required RatingScale RatingScale { get; init; }

    [JsonPropertyName("reviewCount")]
    public required ReviewCount ReviewCount { get; init; }

    [JsonPropertyName("maxOccupancy")]
    public required MaxOccupancy MaxOccupancy { get; init; }

    [JsonPropertyName("bedrooms")]
    public required Bedrooms Bedrooms { get; init; }

    [JsonPropertyName("bathrooms")]
    public required Bathrooms Bathrooms { get; init; }

    [JsonPropertyName("amenities")]
    public required IReadOnlyList<Amenity> Amenities { get; init; }

    [JsonPropertyName("images")]
    public required IReadOnlyList<string> Images { get; init; }

    [JsonPropertyName("host")]
    public required Host1 Host { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public Price1? Price { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public Identity1? Identity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
