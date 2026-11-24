using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Statistics for an automation email message.
/// </summary>
public record AutomationEmailStats
{
    /// <summary>
    /// Stats scoped to email recipients
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public AutomationEmailStatsEmail2? Email { get; init; }

    /// <summary>
    /// An array of click statistics for each URL in the email
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clicks")]
    public IReadOnlyList<AutomationEmailStatsClicks>? Clicks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
