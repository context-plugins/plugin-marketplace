using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// A sync template defines a reusable sync configuration that can be shared
/// across multiple syncs. User Groups can be granted access to
/// templates so users can create syncs from them without seeing the raw
/// destination credentials.
/// </summary>
public record SyncTemplate
{
    /// <summary>
    /// The sync template's id
    /// </summary>
    [JsonPropertyName("id")]
    public required double Id { get; init; }

    /// <summary>
    /// The sync template's name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The sync template's description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The id of the workspace that the sync template belongs to
    /// </summary>
    [JsonPropertyName("workspaceId")]
    public required double WorkspaceId { get; init; }

    /// <summary>
    /// The timestamp when the sync template was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The timestamp when the sync template was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The id of the parent Model that the sync template is connected to
    /// </summary>
    [JsonPropertyName("modelId")]
    public required double ModelId { get; init; }

    /// <summary>
    /// The id of the Destination that the sync template is connected to.
    /// Cannot be changed after creation.
    /// </summary>
    [JsonPropertyName("destinationId")]
    public required double DestinationId { get; init; }

    /// <summary>
    /// The sync template's configuration. The schema depends on the
    /// destination type.
    /// <para>
    /// Consumers should NOT make assumptions on the contents of the
    /// configuration. It may change as Hightouch updates its internal code.
    /// </para>
    /// </summary>
    [JsonPropertyName("configuration")]
    public required IReadOnlyDictionary<string, object> Configuration { get; init; }

    /// <summary>
    /// The sync template's schedule. May be null if the template does not
    /// impose a schedule on its child syncs.
    /// </summary>
    [JsonPropertyName("schedule")]
    public required IReadOnlyDictionary<string, object>? Schedule { get; init; }

    /// <summary>
    /// Whether the sync template's schedule is paused
    /// </summary>
    [JsonPropertyName("schedulePaused")]
    public required bool SchedulePaused { get; init; }

    /// <summary>
    /// The tags of the sync template
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyDictionary<string, string> Tags { get; init; }

    /// <summary>
    /// Match Booster region for syncs created from this template.
    /// Null means inherit the model's single-region default at runtime.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matchboosterRegion")]
    public string? MatchboosterRegion { get; init; }

    /// <summary>
    /// Which configuration fields syncs created from this template may override,
    /// keyed by configuration field path (for example "externalIdMapping" or
    /// "target.schema"). A field is unlocked when listed with
    /// <c>overridable: true</c>; every other field is locked to the template's value.
    /// Null when no field is overridable.
    /// </summary>
    [JsonPropertyName("overrideConfig")]
    public required IReadOnlyDictionary<string, SyncTemplateOverrideOption>? OverrideConfig { get; init; }
}
