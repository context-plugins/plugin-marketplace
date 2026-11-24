using System.Text.Json.Serialization;
using Hightouch.Core.Models;
using Hightouch.Models.AnyOf;

namespace Hightouch.Models;

/// <summary>
/// The scheduling configuration. It can be triggered based on several ways:
/// <para>
/// Interval: the sync will be triggered based on certain interval(minutes/hours/days/weeks)
/// </para>
/// <para>
/// Cron: the sync will be triggered based on cron expression https://en.wikipedia.org/wiki/Cron.
/// </para>
/// <para>
/// Visual: the sync will be triggered based a visual cron configuration on UI
/// </para>
/// <para>
/// DBT-cloud: the sync will be triggered based on a dbt cloud job
/// </para>
/// <para>
/// Match Booster (type "match_booster"): the sync will be triggered after each
/// Match Booster enrichment run of its model completes. Requires the model to
/// have Match Booster enabled, and takes no inner schedule payload.
/// </para>
/// </summary>
public record Schedule
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule")]
    public Schedule1? ScheduleValue { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
