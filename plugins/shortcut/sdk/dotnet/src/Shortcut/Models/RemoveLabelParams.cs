using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Request parameters for removing a Label from a Shortcut Story.
/// </summary>
public record RemoveLabelParams
{
    /// <summary>
    /// The name of the new Label to remove.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(128, MinimumLength = 1)]
    public required string Name { get; init; }
}
