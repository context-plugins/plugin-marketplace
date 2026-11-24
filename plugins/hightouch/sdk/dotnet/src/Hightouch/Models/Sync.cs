using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// Syncs define how data from models are mapped to destinations. Each time a
/// sync runs, Hightouch calculates the rows that have changed since the last
/// run, and syncs them to Sync's destination.
/// </summary>
public record Sync
{
    /// <summary>
    /// The sync's id
    /// </summary>
    [JsonPropertyName("id")]
    public required double Id { get; init; }

    /// <summary>
    /// The sync's slug
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// The id of the workspace that the sync belongs to
    /// </summary>
    [JsonPropertyName("workspaceId")]
    public required double WorkspaceId { get; init; }

    /// <summary>
    /// The timestamp when the sync was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The timestamp when the sync was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The user who created the sync, or null if no user was recorded
    /// </summary>
    [JsonPropertyName("createdBy")]
    public required UserReference CreatedBy { get; init; }

    /// <summary>
    /// The user who last updated the sync, or null if no user was recorded
    /// </summary>
    [JsonPropertyName("updatedBy")]
    public required UserReference UpdatedBy { get; init; }

    /// <summary>
    /// The id of the Destination that sync is connected to
    /// </summary>
    [JsonPropertyName("destinationId")]
    public required double DestinationId { get; init; }

    /// <summary>
    /// The id of the Model that sync is connected to
    /// </summary>
    [JsonPropertyName("modelId")]
    public required double ModelId { get; init; }

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
    [JsonPropertyName("configuration")]
    public required IReadOnlyDictionary<string, object> Configuration { get; init; }

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
    /// The overall status of the sync
    /// </summary>
    [JsonPropertyName("status")]
    public required SyncStatus2 Status { get; init; }

    /// <summary>
    /// Whether the sync has been disabled by the user.
    /// </summary>
    [JsonPropertyName("disabled")]
    public required bool Disabled { get; init; }

    /// <summary>
    /// The timestamp of the last sync run
    /// </summary>
    [JsonPropertyName("lastRunAt")]
    public required DateTimeOffset? LastRunAt { get; init; }

    /// <summary>
    /// The reference column that sync depends on to sync data from source
    /// </summary>
    [JsonPropertyName("referencedColumns")]
    public required IReadOnlyList<string> ReferencedColumns { get; init; }

    /// <summary>
    /// The primary key that sync uses to identify data from source
    /// </summary>
    [JsonPropertyName("primaryKey")]
    public required string PrimaryKey { get; init; }

    /// <summary>
    /// The user facing ID for any created lists or audiences in the sync destination
    /// </summary>
    [JsonPropertyName("externalSegment")]
    public required ExternalSegment ExternalSegment { get; init; }

    /// <summary>
    /// The tags of the sync
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyDictionary<string, string> Tags { get; init; }

    /// <summary>
    /// The id of the sync template this sync is bound to, or null when the sync
    /// owns its configuration. A bound sync takes its destination and
    /// configuration from the template and follows later changes to the
    /// template; <c>configuration</c> is the effective merged configuration and
    /// <c>syncTemplateOverrides</c> holds this sync's own values.
    /// </summary>
    [JsonPropertyName("syncTemplateId")]
    public required double? SyncTemplateId { get; init; }

    /// <summary>
    /// The template configuration fields this sync overrides, keyed by
    /// configuration field path (for example "externalIdMapping" or
    /// "target.schema"). Null when the sync is not bound to a sync template or
    /// has no overrides.
    /// </summary>
    [JsonPropertyName("syncTemplateOverrides")]
    public required IReadOnlyDictionary<string, object>? SyncTemplateOverrides { get; init; }
}
