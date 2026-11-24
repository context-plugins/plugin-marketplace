using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// Visual query, used by audience
/// </summary>
public record Visual
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondaryLabel")]
    public string? SecondaryLabel { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryLabel")]
    public string? PrimaryLabel { get; init; }

    [JsonPropertyName("filter")]
    public required object Filter { get; init; }

    /// <summary>
    /// Parent id of the schema that visual query is based on
    /// </summary>
    [JsonPropertyName("parentId")]
    public required double ParentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
