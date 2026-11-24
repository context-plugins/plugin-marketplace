using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record HotelReservationDetails
{
    /// <summary>
    /// Trip booking number, e.g. TR9088999
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pnr")]
    public string? Pnr { get; init; }

    /// <summary>
    /// Hotel itinerary data, one per segment
    /// </summary>
    [JsonPropertyName("hotel_itinerary")]
    public required IReadOnlyList<HotelItinerary> HotelItinerary { get; init; }

    /// <summary>
    /// Insurance data
    /// </summary>
    [JsonPropertyName("insurance")]
    public required IReadOnlyList<Insurance> Insurance { get; init; }

    /// <summary>
    /// Passengers data
    /// </summary>
    [JsonPropertyName("passengers")]
    public required IReadOnlyList<Passenger> Passengers { get; init; }

    /// <summary>
    /// Name of the affiliate that originated the purchase. If none, leave blank.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("affiliate_name")]
    public string? AffiliateName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
