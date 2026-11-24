using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Container object, containing expenses details.
/// <para>
/// The Expenses object returns an aggregated list of expenses by category of spend.
/// </para>
/// </summary>
public record ExpensesResponse
{
    /// <summary>
    /// Value of this resource is "expenses".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Uniquely identifies the expenses summary.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Number of days covered by the summary
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coverageDays")]
    public long? CoverageDays { get; init; }

    /// <summary>
    /// Average monthly amount for given class for defined period
    /// </summary>
    [JsonPropertyName("bankFees")]
    public required BankFees BankFees { get; init; }

    /// <summary>
    /// Average monthly amount for given class for defined period
    /// </summary>
    [JsonPropertyName("cashWithdrawals")]
    public required CashWithdrawals CashWithdrawals { get; init; }

    /// <summary>
    /// Average monthly amount for given class for defined period
    /// </summary>
    [JsonPropertyName("externalTransfers")]
    public required ExternalTransfers ExternalTransfers { get; init; }

    /// <summary>
    /// First 'month' occurrence of expenses categorised going back as far as 13 months.
    /// </summary>
    [JsonPropertyName("fromMonth")]
    public required string FromMonth { get; init; }

    /// <summary>
    /// Average monthly amount for given class for defined period
    /// </summary>
    [JsonPropertyName("loanInterests")]
    public required LoanInterests LoanInterests { get; init; }

    /// <summary>
    /// Average monthly amount for given class for defined period
    /// </summary>
    [JsonPropertyName("loanRepayments")]
    public required LoanRepayments LoanRepayments { get; init; }

    [JsonPropertyName("payments")]
    public required IReadOnlyList<Payment> Payments { get; init; }

    /// <summary>
    /// Latest 'month' occurrence of expenses categorised.
    /// </summary>
    [JsonPropertyName("toMonth")]
    public required string ToMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public LinksAffordabilityExpensesApi? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
