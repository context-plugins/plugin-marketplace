using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The input for creating a Sync.
/// <para>
/// A sync either owns its configuration (<c>destinationId</c> and <c>configuration</c>
/// are required) or is created from a sync template (<c>syncTemplateId</c> is
/// required, <c>configuration</c> must be omitted and this sync's own values go in
/// <c>syncTemplateOverrides</c>).
/// </para>
/// </summary>
public record SyncCreate
{
    /// <summary>
    /// The sync's slug
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// The id of the Model that sync is connected to
    /// </summary>
    [JsonPropertyName("modelId")]
    public required double ModelId { get; init; }

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
    [JsonPropertyName("schedule")]
    public required Schedule? Schedule { get; init; }

    /// <summary>
    /// Whether the sync has been disabled by the user.
    /// </summary>
    [JsonPropertyName("disabled")]
    public required bool Disabled { get; init; }

    /// <summary>
    /// The id of the Destination that sync is connected to. Required unless
    /// <c>syncTemplateId</c> is provided: a sync created from a sync template always
    /// uses the template's destination, and this field, when provided, must
    /// match it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destinationId")]
    public double? DestinationId { get; init; }

    /// <summary>
    /// The sync's configuration. This specifies how data is mapped, among other
    /// configuration. The schema depends on the destination type.
    /// <para>
    /// Required unless <c>syncTemplateId</c> is provided, in which case it must be
    /// omitted: the template provides the configuration and this sync's own
    /// values go in <c>syncTemplateOverrides</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configuration")]
    public IReadOnlyDictionary<string, object>? Configuration { get; init; }

    /// <summary>
    /// The id of the Sync Template to create the sync from. The sync inherits
    /// the template's destination and configuration and follows later changes
    /// to the template. A null <c>schedule</c> inherits the template's schedule; a
    /// schedule given here belongs to the sync. <c>modelId</c> must be the template's
    /// model or an audience built on it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncTemplateId")]
    public double? SyncTemplateId { get; init; }

    /// <summary>
    /// Values this sync sets for the template's overridable fields, keyed by
    /// configuration field path (for example "externalIdMapping" or
    /// "target.schema"). Only fields the template's <c>overrideConfig</c> marks as
    /// overridable are accepted. Requires <c>syncTemplateId</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncTemplateOverrides")]
    public IReadOnlyDictionary<string, object>? SyncTemplateOverrides { get; init; }
}
