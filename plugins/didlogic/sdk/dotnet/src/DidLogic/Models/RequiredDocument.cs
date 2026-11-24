using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record RequiredDocument
{
    /// <summary>
    /// Document type ID
    /// </summary>
    [JsonPropertyName("type")]
    public required int Type { get; init; }

    /// <summary>
    /// Document type name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
