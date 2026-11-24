using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.AnyOf;

namespace StayingApi.Models;

public record Location
{
    [JsonPropertyName("lat")]
    public required Lat Lat { get; init; }

    [JsonPropertyName("lng")]
    public required Lng Lng { get; init; }

    [JsonPropertyName("city")]
    public required City City { get; init; }

    [JsonPropertyName("region")]
    public required Region Region { get; init; }

    [JsonPropertyName("country")]
    public required Country Country { get; init; }

    [JsonPropertyName("address")]
    public required Address Address { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
