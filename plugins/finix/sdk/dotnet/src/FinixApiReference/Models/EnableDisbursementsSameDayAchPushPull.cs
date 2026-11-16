using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record EnableDisbursementsSameDayAchPushPull
{
    /// <summary>
    /// Indicates whether same-day ACH pull disbursements (debits) are enabled, allowing funds to be withdrawn from an account via same-day ACH transfer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursements_same_day_ach_pull_enabled")]
    public bool? DisbursementsSameDayAchPullEnabled { get; init; }

    /// <summary>
    /// Indicates whether same-day ACH push disbursements (credits) are enabled, allowing funds to be sent to an account via same-day ACH transfer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursements_same_day_ach_push_enabled")]
    public bool? DisbursementsSameDayAchPushEnabled { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
