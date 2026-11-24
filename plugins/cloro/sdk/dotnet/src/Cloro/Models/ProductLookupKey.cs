using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Key used to look up product updates
/// </summary>
public record ProductLookupKey
{
    /// <summary>
    /// JSON-encoded product lookup data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public string? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
