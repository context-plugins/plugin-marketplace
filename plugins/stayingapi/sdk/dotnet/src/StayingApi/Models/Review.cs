using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation.Attributes;
using StayingApi.Models.AnyOf;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

public record Review
{
    [JsonPropertyName("platform")]
    public required Platform Platform { get; init; }

    [JsonPropertyName("listingId")]
    [MinLength(1)]
    public required string ListingId { get; init; }

    [JsonPropertyName("reviewId")]
    [MinLength(1)]
    public required string ReviewId { get; init; }

    [JsonPropertyName("rating")]
    [Minimum(0.0)]
    public required double Rating { get; init; }

    [JsonPropertyName("ratingScale")]
    [Minimum(0.0)]
    public required double RatingScale { get; init; }

    [JsonPropertyName("title")]
    public required Title Title { get; init; }

    [JsonPropertyName("text")]
    public required Text Text { get; init; }

    [JsonPropertyName("author")]
    public required Author Author { get; init; }

    [JsonPropertyName("date")]
    [RegularExpression("^\\d{4}-\\d{2}-\\d{2}$")]
    public required string Date { get; init; }

    [JsonPropertyName("tripType")]
    public required TripType TripType { get; init; }

    [JsonPropertyName("language")]
    public required Language Language { get; init; }

    [JsonPropertyName("ownerResponse")]
    public required OwnerResponse OwnerResponse { get; init; }

    [JsonPropertyName("liked")]
    public required Liked Liked { get; init; }

    [JsonPropertyName("disliked")]
    public required Disliked Disliked { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
