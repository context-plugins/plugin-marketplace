using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record DocResponse1
{
    /// <summary>
    /// The content of the document in the specified format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// The format of the returned document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public string? Format { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
