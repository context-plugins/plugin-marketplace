using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Information about insurance
/// </summary>
public record PolicyDetails
{
    /// <summary>
    /// Insurance policy type
    /// </summary>
    [JsonPropertyName("insurance_type")]
    public required string InsuranceType { get; init; }

    /// <summary>
    /// ISO 8601 start date, e.g. 2018-10-17
    /// </summary>
    [JsonPropertyName("insurance_start_dt")]
    public required string InsuranceStartDt { get; init; }

    /// <summary>
    /// ISO 8601 end date, e.g. 2018-10-17
    /// </summary>
    [JsonPropertyName("insurance_end_dt")]
    public required string InsuranceEndDt { get; init; }

    /// <summary>
    /// Amount of insurance policy
    /// </summary>
    [JsonPropertyName("insured_amount")]
    public required string InsuredAmount { get; init; }

    /// <summary>
    /// Required for car insurance
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("car_details")]
    public CarDetails? CarDetails { get; init; }

    /// <summary>
    /// Required for travel insurance
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("travel_details")]
    public TravelDetails? TravelDetails { get; init; }

    /// <summary>
    /// If insurance can be cancelled/refunded - true, otherwise - false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refundable")]
    public bool? Refundable { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider_name")]
    public string? ProviderName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
