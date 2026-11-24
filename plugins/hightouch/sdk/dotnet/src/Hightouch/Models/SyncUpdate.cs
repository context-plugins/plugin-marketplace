using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The input for updating a Sync
/// </summary>
public record SyncUpdate
{
    /// <summary>
    /// The sync's configuration. This specifies how data is mapped, among other
    /// configuration.
    /// <para>
    /// The schema depends on the destination type.
    /// </para>
    /// <para>
    /// For a sync bound to a sync template this is the effective configuration:
    /// the template's configuration with this sync's <c>syncTemplateOverrides</c>
    /// applied.
    /// </para>
    /// <para>
    /// Consumers should NOT make assumptions on the contents of the
    /// configuration. It may change as Hightouch updates its internal code.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configuration")]
    public IReadOnlyDictionary<string, object>? Configuration { get; init; }

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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule")]
    public Schedule? Schedule { get; init; }

    /// <summary>
    /// Whether the sync has been disabled by the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disabled")]
    public bool? Disabled { get; init; }

    /// <summary>
    /// The id of a Sync Template to bind the sync to, or null to detach the sync
    /// from its template. Binding requires the template's destination to match
    /// the sync's destination; while bound, the sync follows the template's
    /// configuration and <c>configuration</c> cannot be set directly. Detaching
    /// copies the sync's effective configuration, schedule and other inherited
    /// settings onto the sync so it keeps running unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncTemplateId")]
    public double? SyncTemplateId { get; init; }

    /// <summary>
    /// Replaces the sync's template overrides, keyed by configuration field
    /// path. Only fields the template's <c>overrideConfig</c> marks as overridable
    /// are accepted; null clears every override. Requires the sync to be, or to
    /// become, bound to a sync template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncTemplateOverrides")]
    public IReadOnlyDictionary<string, object>? SyncTemplateOverrides { get; init; }
}
