using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// A custom bypass entry for write operations.
/// </summary>
public record CustomBypassRequestItem
{
    /// <summary>
    /// The name of the entity to bypass (application name or URL pattern)
    /// </summary>
    [JsonPropertyName("name")]
    [MaxLength(256)]
    public required string Name { get; init; }

    /// <summary>
    /// Optional note about this bypass entry
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    [MaxLength(256)]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
