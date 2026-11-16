using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Additional charges beyond the base rental rate being billed. Each field represents a specific charge type, in cents.
/// </summary>
public record ExtraChargeDetails1
{
    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra_mileage_amount")]
    public int? ExtraMileageAmount { get; init; }

    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fuel_amount")]
    public int? FuelAmount { get; init; }

    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insurance_amount")]
    public int? InsuranceAmount { get; init; }

    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("late_return_amount")]
    public int? LateReturnAmount { get; init; }

    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("one_way_service_fee_amount")]
    public int? OneWayServiceFeeAmount { get; init; }

    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parking_violation_amount")]
    public int? ParkingViolationAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
