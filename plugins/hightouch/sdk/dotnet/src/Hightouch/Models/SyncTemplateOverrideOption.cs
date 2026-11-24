using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// Whether syncs created from a sync template may set a configuration field.
/// </summary>
public record SyncTemplateOverrideOption
{
    /// <summary>
    /// True when syncs created from the template may set the field through
    /// <c>syncTemplateOverrides</c>.
    /// </summary>
    [JsonPropertyName("overridable")]
    public required bool Overridable { get; init; }
}
