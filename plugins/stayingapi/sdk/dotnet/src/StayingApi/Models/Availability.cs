using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

public record Availability
{
    [JsonPropertyName("platform")]
    public required Platform Platform { get; init; }

    [JsonPropertyName("listingId")]
    [MinLength(1)]
    public required string ListingId { get; init; }

    [JsonPropertyName("dates")]
    public required IReadOnlyList<Date> Dates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
