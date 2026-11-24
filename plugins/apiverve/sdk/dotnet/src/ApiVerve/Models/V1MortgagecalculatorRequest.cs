using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1MortgagecalculatorRequest
{
    /// <summary>
    /// The loan amount
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    /// <summary>
    /// The interest rate (percentage)
    /// </summary>
    [JsonPropertyName("rate")]
    public required double Rate { get; init; }

    /// <summary>
    /// The loan term in years
    /// </summary>
    [JsonPropertyName("years")]
    public required int Years { get; init; }

    /// <summary>
    /// The down payment amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downpayment")]
    public double? Downpayment { get; init; }

    /// <summary>
    /// The annual property tax amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annual_propertytax")]
    public double? AnnualPropertytax { get; init; }

    /// <summary>
    /// The annual home insurance amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annual_homeinsurance")]
    public double? AnnualHomeinsurance { get; init; }

    /// <summary>
    /// The annual HOA amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annual_hoa")]
    public double? AnnualHoa { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
