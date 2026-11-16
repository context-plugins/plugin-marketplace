using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Contains lodging-specific fields for <c>Authorization</c> and <c>Transfer</c> requests. Optional for lodging MCC transactions (MCC 3501–3999, 7011). Returns <c>null</c> for all other transactions.
/// </summary>
public record AdditionalLodgingData
{
    /// <summary>
    /// The guest's scheduled arrival date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("check_in_date")]
    public CheckInDate? CheckInDate { get; init; }

    /// <summary>
    /// The guest's scheduled departure date. Must represent a date on or after <c>check_in_date</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("check_out_date")]
    public CheckOutDate? CheckOutDate { get; init; }

    /// <summary>
    /// The phone number guests can call for support or inquiries related to their stay.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_service_phone")]
    public string? CustomerServicePhone { get; init; }

    /// <summary>
    /// Additional charges billed beyond the room rate. Each field represents a specific charge type, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra_charge_details")]
    public ExtraChargeDetails? ExtraChargeDetails { get; init; }

    /// <summary>
    /// The folio or agreement number associated with the reservation. Max 12 characters; longer values are truncated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hotel_agreement_number")]
    public string? HotelAgreementNumber { get; init; }

    /// <summary>
    /// Indicates whether the lodging charge is an advance deposit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_advance_deposit")]
    public bool? IsAdvanceDeposit { get; init; } = false;

    /// <summary>
    /// Set to <c>true</c> if the cardholder is being billed for a reserved room that was not occupied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_no_show")]
    public bool? IsNoShow { get; init; } = false;

    /// <summary>
    /// The total number of nights for the lodging stay.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number_of_nights")]
    public int? NumberOfNights { get; init; }

    /// <summary>
    /// The direct phone number of the lodging property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("property_phone")]
    public string? PropertyPhone { get; init; }

    /// <summary>
    /// The nightly room rate, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("room_rate")]
    public string? RoomRate { get; init; }

    /// <summary>
    /// The tax amount applied to the room rate, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("room_tax")]
    public string? RoomTax { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
