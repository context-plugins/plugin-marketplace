using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Details of the education program being paid for.
/// </summary>
public record Program
{
    /// <summary>
    /// Total payment plan tenure in months.
    /// </summary>
    [JsonPropertyName("payment_tenure_months")]
    public required int PaymentTenureMonths { get; init; }

    /// <summary>
    /// Months remaining until program completion / graduation.
    /// </summary>
    [JsonPropertyName("months_to_completion")]
    public required int MonthsToCompletion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
