using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The link of the text.
/// </summary>
public record Link2
{
    /// <summary>
    /// The URL of the link.
    /// </summary>
    [JsonPropertyName("href")]
    public required string Href { get; init; }

    /// <summary>
    /// The target of the link (e.g., _blank).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target")]
    public string? Target { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
