using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// Aggregate email engagement statistics for an automation.
/// </summary>
public record AutomationStatsEmail
{
    /// <summary>
    /// Total number of email recipients across all emails
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipients")]
    public int? Recipients { get; init; } = 0;

    /// <summary>
    /// Total number of emails delivered
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delivered")]
    public int? Delivered { get; init; } = 0;

    /// <summary>
    /// Total number of email opens
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("opens")]
    public int? Opens { get; init; } = 0;

    /// <summary>
    /// Total number of unique email opens
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unique_opens")]
    public int? UniqueOpens { get; init; } = 0;

    /// <summary>
    /// The percentage of emails that have been opened
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("open_rate")]
    public double? OpenRate { get; init; }

    /// <summary>
    /// Total number of email clicks
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clicks")]
    public int? Clicks { get; init; } = 0;

    /// <summary>
    /// Unique number of email clicks
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unique_clicks")]
    public int? UniqueClicks { get; init; } = 0;

    /// <summary>
    /// The percentage of emails that have been clicked
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("click_rate")]
    public double? ClickRate { get; init; }

    /// <summary>
    /// Total number of email unsubscribes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsubscribes")]
    public int? Unsubscribes { get; init; } = 0;

    /// <summary>
    /// The number of subscribers that reported emails as spam
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spam_reports")]
    public int? SpamReports { get; init; } = 0;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
