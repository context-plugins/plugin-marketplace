using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record TermDeposit
{
    /// <summary>
    /// The lodgement date of the original deposit.
    /// </summary>
    [JsonPropertyName("lodgementDate")]
    public required string LodgementDate { get; init; }

    /// <summary>
    /// Maturity date for the term deposit.
    /// </summary>
    [JsonPropertyName("maturityDate")]
    public required string MaturityDate { get; init; }

    /// <summary>
    /// Amount to be paid upon maturity. If absent, it implies the amount to paid is variable and cannot currently be calculated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maturityAmount")]
    public string? MaturityAmount { get; init; }

    /// <summary>
    /// If absent assumes AUD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maturityCurrency")]
    public string? MaturityCurrency { get; init; }

    /// <summary>
    /// Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments.
    /// </summary>
    [JsonPropertyName("maturityInstructions")]
    public required MaturityInstructions MaturityInstructions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
