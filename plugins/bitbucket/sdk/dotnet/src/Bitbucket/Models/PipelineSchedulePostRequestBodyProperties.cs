using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

public record PipelineSchedulePostRequestBodyProperties
{
    /// <summary>
    /// The target on which the schedule will be executed.
    /// </summary>
    [JsonPropertyName("target")]
    public required Target Target { get; init; }

    /// <summary>
    /// Whether the schedule is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// The cron expression with second precision (7 fields) that the schedule applies. For example, for expression: 0 0 12 * * ? *, will execute at 12pm UTC every day.
    /// </summary>
    [JsonPropertyName("cron_pattern")]
    public required string CronPattern { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
