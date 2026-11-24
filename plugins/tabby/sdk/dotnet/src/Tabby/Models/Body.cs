using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Should be an object containing any of the keys with corresponded sub objects
/// </summary>
public record Body
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flight_reservation_details")]
    public FlightReservationDetails? FlightReservationDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hotel_reservation_details")]
    public HotelReservationDetails? HotelReservationDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insurance_details")]
    public InsuranceDetails? InsuranceDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_history_full")]
    public AttachmentPaymentHistoryFull? PaymentHistoryFull { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_history_simple")]
    public AttachmentPaymentHistorySimple? PaymentHistorySimple { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flight_points_simple")]
    public FlightPointsSimple? FlightPointsSimple { get; init; }

    /// <summary>
    /// Sellers' details within marketplaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marketplaces")]
    public Marketplaces? Marketplaces { get; init; }

    /// <summary>
    /// Education-vertical risk signals for the current session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("education_details")]
    public EducationDetails? EducationDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
