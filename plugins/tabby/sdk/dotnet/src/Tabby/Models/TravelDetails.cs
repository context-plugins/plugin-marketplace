using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Required for travel insurance
/// </summary>
public record TravelDetails
{
    [JsonPropertyName("departure_country")]
    public required string DepartureCountry { get; init; }

    [JsonPropertyName("arrival_country")]
    public required string ArrivalCountry { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
