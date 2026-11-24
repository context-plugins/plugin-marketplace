using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.AnyOf;

namespace StayingApi.Models;

/// <summary>
/// DIRECT MODE ONLY, and BEST-EFFORT: fee coverage differs per platform. Airbnb reports cleaning, service and taxes; Booking.com reports taxes only; Vrbo and Google report none (all null). Compare on totalPrice — it is present and comparable on every platform. Never assume a null fee means the platform does not charge it; it means we could not read it.
/// </summary>
public record Fees1
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
