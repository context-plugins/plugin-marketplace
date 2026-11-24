using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Student's payment history with the merchant.
/// </summary>
public record StudentHistory
{
    /// <summary>
    /// Total count of late payments by the student across history.
    /// </summary>
    [JsonPropertyName("late_payments_count")]
    public required int LatePaymentsCount { get; init; }

    /// <summary>
    /// Average overdue duration in days.
    /// </summary>
    [JsonPropertyName("avg_overdue_duration_days")]
    public required double AvgOverdueDurationDays { get; init; }

    /// <summary>
    /// Window over which history was calculated, to distinguish a new student's 0 late payments from a long-history clean student's 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("observation_window_months")]
    public int? ObservationWindowMonths { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
