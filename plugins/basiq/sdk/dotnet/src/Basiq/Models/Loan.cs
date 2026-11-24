using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Loan
{
    /// <summary>
    /// Start date for the loan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public string? StartDate { get; init; }

    /// <summary>
    /// Date that the loan is due to be repaid in full.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public string? EndDate { get; init; }

    /// <summary>
    /// Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repaymentType")]
    public RepaymentType1? RepaymentType { get; init; }

    /// <summary>
    /// Optional loan value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalLoanAmount")]
    public string? OriginalLoanAmount { get; init; }

    /// <summary>
    /// If absent assumes AUD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originalLoanCurrency")]
    public string? OriginalLoanCurrency { get; init; }

    /// <summary>
    /// Minimum amount of next instalment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minInstalmentAmount")]
    public string? MinInstalmentAmount { get; init; }

    /// <summary>
    /// Next date that an instalment is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextInstalmentDate")]
    public string? NextInstalmentDate { get; init; }

    /// <summary>
    /// If absent assumes AUD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minInstalmentCurrency")]
    public string? MinInstalmentCurrency { get; init; }

    /// <summary>
    /// Maximum amount of funds that can be redrawn. If not present, redraw is not available even if the feature exists for the account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxRedraw")]
    public string? MaxRedraw { get; init; }

    /// <summary>
    /// If absent assumes AUD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxRedrawCurrency")]
    public string? MaxRedrawCurrency { get; init; }

    /// <summary>
    /// Minimum redraw amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minRedraw")]
    public string? MinRedraw { get; init; }

    /// <summary>
    /// If absent assumes AUD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minRedrawCurrency")]
    public string? MinRedrawCurrency { get; init; }

    /// <summary>
    /// The expected or required repayment frequency. Formatted according to ISO 8601 Durations (excludes recurrence syntax).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repaymentFrequency")]
    public string? RepaymentFrequency { get; init; }

    /// <summary>
    /// The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accessed under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists but details can not be accessed under the current authorisation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offsetAccountIds")]
    public IReadOnlyList<string>? OffsetAccountIds { get; init; }

    /// <summary>
    /// Set to true if one or more offset accounts are configured for this loan account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offsetAccountEnabled")]
    public bool? OffsetAccountEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
