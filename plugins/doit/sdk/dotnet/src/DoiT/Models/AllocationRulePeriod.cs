using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A date range when a rule applies. startDate and endDate are both inclusive, so a handover between two rules needs a one-day gap: the first rule's endDate the day before, the second rule's startDate the handover day. Only the first period in the list may omit startDate, and only the last may omit endDate.
/// </summary>
public record AllocationRulePeriod
{
    /// <summary>
    /// Start date (YYYY-MM-DD, UTC), inclusive. Absent means no lower bound.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public string? StartDate { get; init; }

    /// <summary>
    /// End date (YYYY-MM-DD, UTC), inclusive. Absent means no upper bound.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public string? EndDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
