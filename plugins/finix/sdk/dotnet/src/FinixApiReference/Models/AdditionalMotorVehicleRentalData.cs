using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Contains motor vehicle rental-specific fields for <c>Authorization</c> and <c>Transfer</c> requests. Optional for motor vehicle rental MCC transactions (MCC 3351–3500, 7512). Returns <c>null</c> for all other transactions.
/// </summary>
public record AdditionalMotorVehicleRentalData
{
    /// <summary>
    /// The rental agreement or contract reference number for the rental. Max 9 characters; longer values are truncated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("motor_vehicle_rental_agreement_number")]
    public string? MotorVehicleRentalAgreementNumber { get; init; }

    /// <summary>
    /// The phone number customers can call for support or inquiries related to their rental.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_service_number")]
    public string? CustomerServiceNumber { get; init; }

    /// <summary>
    /// Additional charges beyond the base rental rate being billed. Each field represents a specific charge type, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra_charge_details")]
    public ExtraChargeDetails1? ExtraChargeDetails { get; init; }

    /// <summary>
    /// An indicator that the cardholder is being billed for a reserved vehicle that was not actually rented (that is, a "no-show" charge).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_no_show")]
    public bool? IsNoShow { get; init; } = false;

    /// <summary>
    /// The total number of days for the vehicle rental.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number_of_days")]
    public int? NumberOfDays { get; init; }

    /// <summary>
    /// The daily rental rate for the vehicle, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rental_rate")]
    public string? RentalRate { get; init; }

    /// <summary>
    /// The name of the person renting the vehicle.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("renter_name")]
    public string? RenterName { get; init; }

    /// <summary>
    /// The full address of the rental pickup location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pickup_address")]
    public Address? PickupAddress { get; init; }

    /// <summary>
    /// The scheduled vehicle pickup date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pickup_date")]
    public PickupDate? PickupDate { get; init; }

    /// <summary>
    /// The full address of the vehicle return location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("return_address")]
    public Address? ReturnAddress { get; init; }

    /// <summary>
    /// The scheduled vehicle return date. Must be on or after <c>pickup_date</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("return_date")]
    public ReturnDate? ReturnDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
