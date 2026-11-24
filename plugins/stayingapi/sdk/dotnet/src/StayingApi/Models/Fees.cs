using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.AnyOf;

namespace StayingApi.Models;

public record Fees
{
    [JsonPropertyName("cleaning")]
    public required Cleaning Cleaning { get; init; }

    [JsonPropertyName("service")]
    public required Service Service { get; init; }

    [JsonPropertyName("taxes")]
    public required Taxes Taxes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
