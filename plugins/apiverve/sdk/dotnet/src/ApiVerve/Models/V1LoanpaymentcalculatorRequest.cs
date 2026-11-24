using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1LoanpaymentcalculatorRequest
{
    /// <summary>
    /// The loan amount
    /// </summary>
    [JsonPropertyName("loanAmount")]
    public required double LoanAmount { get; init; }

    /// <summary>
    /// The interest rate (percentage)
    /// </summary>
    [JsonPropertyName("interestRate")]
    public required double InterestRate { get; init; }

    /// <summary>
    /// The loan term in years
    /// </summary>
    [JsonPropertyName("loanTerm")]
    public required int LoanTerm { get; init; }

    /// <summary>
    /// Amount paid up front, subtracted from the loan amount before interest is applied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downpayment")]
    public double? Downpayment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
