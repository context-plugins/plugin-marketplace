using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The input for updating a Sync Template. <c>destinationId</c> cannot be changed
/// after creation.
/// </summary>
public record SyncTemplateUpdate
{
    /// <summary>
    /// The sync template's name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The sync template's configuration. The schema depends on the
    /// destination type.
    /// <para>
    /// Consumers should NOT make assumptions on the contents of the
    /// configuration. It may change as Hightouch updates its internal code.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configuration")]
    public IReadOnlyDictionary<string, object>? Configuration { get; init; }

    /// <summary>
    /// The sync template's description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The id of the parent Model that the sync template is connected to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modelId")]
    public double? ModelId { get; init; }

    /// <summary>
    /// The sync template's schedule. May be null if the template does not
    /// impose a schedule on its child syncs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule")]
    public IReadOnlyDictionary<string, object>? Schedule { get; init; }

    /// <summary>
    /// Whether the sync template's schedule is paused
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedulePaused")]
    public bool? SchedulePaused { get; init; }

    /// <summary>
    /// The tags of the sync template
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overrideConfig")]
    public IReadOnlyDictionary<string, SyncTemplateOverrideOption>? OverrideConfig { get; init; }
}
