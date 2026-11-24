using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Institution logo resource type
/// </summary>
public record Logo
{
    /// <summary>
    /// Colors contains institution colors type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("colors")]
    public Colors? Colors { get; init; }

    /// <summary>
    /// institution logo resource links
    /// </summary>
    [JsonPropertyName("links")]
    public required LinksPlatformConnectorsApi Links { get; init; }

    /// <summary>
    /// Resource type identifier.
    /// image ImageResourceType
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "image";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
