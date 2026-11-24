using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The schema restrictions actively enforced in creating this report. To learn more, see <see href="https://support.google.com/analytics/answer/10851388">Access and data-restriction management</see>.
/// </summary>
public record SchemaRestrictionResponse
{
    /// <summary>
    /// All restrictions actively enforced in creating the report. For example, <c>purchaseRevenue</c> always has the restriction type <c>REVENUE_DATA</c>. However, this active response restriction is only populated if the user's custom role disallows access to <c>REVENUE_DATA</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activeMetricRestrictions")]
    public IReadOnlyList<ActiveMetricRestriction>? ActiveMetricRestrictions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
